import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { sql } from "@vercel/postgres";
import MerkleTree from 'merkletreejs'
import keccak256 from 'keccak256'

export async function GET(req) {

    const token = await getToken({ req })
    const wallet = token?.email || "0x000000"
    console.log("wallet", wallet)
    const isAdmin = ["0xA945096CA674588d7aE31EB38508CCEa697eB625", "0x0D045c9f200048BBb54569270E1a87AD599f6A71"].includes(wallet)

    if (!isAdmin) {
        // throw error
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { rows } = await sql`select distinct wallet from pariah_allowlist WHERE wallet != '' ORDER BY 1`
    const walletList = rows.map((row) => row.wallet)
    const leafnodes = walletList.map(x => keccak256(x));
    const merkleTree = new MerkleTree(leafnodes, keccak256, { sortPairs: true });
    const rootHash = merkleTree.getRoot();

    let processed = [];
    for (let i = 0; i < walletList.length; i++) {
        processed.push(
            {
                address: walletList[i],
                address_hash: '0x' + keccak256(walletList[i]).toString('hex'),
                root_hash: '0x' + rootHash.toString('hex'),
                proof: merkleTree.getHexProof(keccak256(walletList[i]))
            }
        );
    }

    await sql`
            CREATE TABLE IF NOT EXISTS pariah_allowlist_proofs (
            id SERIAL PRIMARY KEY,
            wallet VARCHAR(50) UNIQUE NOT NULL,
            address_hash TEXT UNIQUE NOT NULL,
            root_hash TEXT NOT NULL,
            proof TEXT[] NOT NULL
          )`

    await sql`
          TRUNCATE TABLE pariah_allowlist_proofs
          `

    for (let i = 0; i < processed.length; i++) {
        await sql`
            INSERT INTO pariah_allowlist_proofs (wallet, address_hash, root_hash, proof) VALUES (${processed[i].address}, ${processed[i].address_hash}, ${processed[i].root_hash}, ${processed[i].proof})
            `
    }

    const { rows: allowlist_final } = await sql`select * from pariah_allowlist_proofs`

    return NextResponse.json({ allowlist_final })
}

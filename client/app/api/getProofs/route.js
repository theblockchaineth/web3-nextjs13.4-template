import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { sql } from "@vercel/postgres";

export async function GET(req) {

    const token = await getToken({ req })

    // if no JWT token, throw error
    if (!token) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const wallet = token?.email || "0x000000"
    const { rows } = await sql`select wallet, proof from pariah_allowlist_proofs where wallet = ${wallet}`

    const proofs = rows[0].proof

    return NextResponse.json({wallet, proofs})
}

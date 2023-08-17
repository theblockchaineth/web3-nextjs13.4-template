import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { sql } from "@vercel/postgres";

import type { NextRequest } from 'next/server'

export async function GET(  
    req: NextRequest
    ) 
    {

    const token = await getToken({ req })
    console.log(token)
    const wallet = token?.email || "0x000000"

    const { rows } = await sql`SELECT * FROM pariah_allowlist WHERE wallet = ${wallet}`

    if (rows.length < 1) {
        return NextResponse.json({ allowlist: false })
    } else {
        return NextResponse.json({ allowlist: true })
    }

}

export async function POST(
    req: NextRequest
    ) {

    const token = await getToken({ req })
    console.log(token)
    const wallet = token?.email || "0x000000"

    const { rows } = await sql`SELECT count(*) FROM pariah_allowlist`

    if (rows[0].count > 199) {
        return NextResponse.json(
            { message: "No more space on the allowlist" }
        )
    }

    const { rows: rows2 } = await sql`SELECT * FROM pariah_allowlist WHERE wallet = ${wallet}`

    if (rows2.length === 0) {
        await sql`INSERT INTO pariah_allowlist (wallet) VALUES (${wallet});`
        return NextResponse.json({ message: "Added to Allowlist" })
    } else {
        return NextResponse.json({ message: "Already on the allowlist" })
    }
}

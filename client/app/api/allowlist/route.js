import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { sql } from "@vercel/postgres";

export async function GET(request) {

    const token = await getToken({ request })
    const wallet = token.email

    const { rows } = await sql`SELECT * FROM pariah_allowlist WHERE wallet = ${wallet}`

    if (rows.length < 1) {
        return NextResponse.json({ allowlist: false })
    } else {
        return NextResponse.json({ allowlist: true })
    }

}

export async function POST(request) {

    const token = await getToken({ request })
    const wallet = token.email

    const { rows } = await sql`SELECT count(*) FROM pariah_allowlist`

    if (rows[0].count > 199) {
        return NextResponse.json(
            { message: "No more space on the allowlist" }
        )
    }

    const { rows: rows2 } = await sql`SELECT * FROM pariah_allowlist WHERE wallet = ${wallet}`

    if (rows2.length === 0) {
        const { rows: inserted } = await sql`INSERT INTO pariah_allowlist (wallet) VALUES (${wallet});`
        return NextResponse.json({ message: "Added to Allowlist" })
    } else {
        return NextResponse.json({ message: "Already on the allowlist" })
    }
}

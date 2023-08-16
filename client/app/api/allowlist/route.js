import { NextResponse } from 'next/server'
import { decode } from 'next-auth/jwt';
import { sql } from "@vercel/postgres";

export async function GET(request) {

    const sessionToken = request.cookies.get('next-auth.session-token')?.value
    const decoded = await decode({
        token: sessionToken,
        secret: process.env.NEXTAUTH_SECRET,
      });
    const wallet = decoded.email || ""

    const { rows } = await sql`SELECT * FROM pariah_allowlist WHERE wallet = ${wallet}`

    if (rows.length === 0) {
        return NextResponse.json({ allowlist: false })
    } else {
        return NextResponse.json({ allowlist: true })
    }

}

export async function POST(request) {

    const sessionToken = request.cookies.get('next-auth.session-token')?.value
    const decoded = await decode({
        token: sessionToken,
        secret: process.env.NEXTAUTH_SECRET,
      });
    const wallet = decoded.email || ""

    const { rows } = await sql`SELECT count(*) FROM pariah_allowlist`
    console.log(rows[0].count)

    if (rows[0].count > 199) {
        return NextResponse.json(
            { message: "No more space on the allowlist" }
            )
    } 

    const { rows: rows2 } = await sql`SELECT * FROM pariah_allowlist WHERE wallet = ${wallet}`

    if (rows2.length === 0) {
        const { rows:inserted } = await sql`INSERT INTO pariah_allowlist (wallet) VALUES (${wallet});`
        return NextResponse.json({ message: "Added to Allowlist" })
    } else {
        return NextResponse.json({ message: "Already on the allowlist" })
    }
}



import { NextResponse } from 'next/server';
import { sql } from "@vercel/postgres";

export async function GET() {

    const { rows } = await sql`SELECT * FROM pariah_config`
    return NextResponse.json({ rows })

}

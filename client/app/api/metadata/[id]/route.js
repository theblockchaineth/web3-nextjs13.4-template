import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req, { params }) {

    const { id } = params
    const jsonDirectory = path.join(process.cwd(), 'app/api/metadata/[id]');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    console.log(id, jsonDirectory, fileContents)

    return NextResponse.json({ fileContents })
}

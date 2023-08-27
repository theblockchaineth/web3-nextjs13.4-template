import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req, { params }) {

    const { id } = params
    const jsonDirectory = path.join(process.cwd(), 'app/api/metadata/[id]');
    const fileContents = await fs.readFile(jsonDirectory + '/tokenDecisions-processed.json', 'utf8');
    const metadata = await JSON.parse(fileContents)

    let record = await metadata.filter(function (record) {
        return record.tokenId == id;
    }
    );

    if (id < 20) {
        return NextResponse.json({
            "tokenId": id,
            "name": "The Pariah: #" + String(id) + "(Developer Token)",
            "description": "The Pariah is an exploration and fusion of classic, gritty, American Comic Art and a concept story of a near-future metropolis haunted by a mysterious killer.",
            "image": "ipfs://QmR9xDgDshDaVDkKwfGm2PECAPZnzvDxEU6JViJdGoqDai",
            "attributes": [
                {
                    "trait_type": "Dev Token",
                    "value": "Yes"
                },
                {
                    "trait_type": "Revealed",
                    "value": "No"
                }
            ]
        })
    }


    if (record.length == 0) {
        return NextResponse.json({
            "name": "The Pariah: #" + String(id),
            "description": "The Pariah is an exploration and fusion of classic, gritty, American Comic Art and a concept story of a near-future metropolis haunted by a mysterious killer.",
            "image": "ipfs://QmdqsBUpCAXmZ8dWE3vRunwsKWEn9nAUsG6xzYzJBMZFZF",
            "attributes": [
                {
                    "trait_type": "Revealed",
                    "value": "No"
                }
            ]
        })
    }

    delete record[0].prompt;
    console.log(record[0])

    return NextResponse.json(record[0])
}

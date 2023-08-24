// Imports the Alchemy SDK
const { Alchemy, Network, Utils } = require("alchemy-sdk");
const fs = require('fs');

// Configures the Alchemy SDK
const config = {
    apiKey: "9-HARQIuv-AMp3yLgA-I23cWUeFs4ntD",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const iface = new Utils.Interface([
    "event MintedDecisionArray(uint256[] decisions, uint256 indexed tokenStart)"
]);

const gender = ['Random', 'Male', 'Female']
const clique = ['Random','Goths','Jocks','Preppy','Corporation','Casual','Hiphop','Hippies']
const physique = ['Random','Underweight','Medium','Athletic','Overweight']
const mentality = ['Random','Brave','Heroic','Aggressive','Neutral','Apathetic','Nervous','Scared']

const main = async () => {
    const logs = await alchemy.core
        .getLogs({
            address: "0x9d9F58A88d84d5380d53bb2934Fe2CA84aF4Be38",
            fromBlock: 'earliest',
            topics: [
                "0x6fb1c409f5d8b7c703b00ba33a0ef38929bfabec859065264a21d2a07eed0f1f"
            ]
        });

    let processedLogs = [];

    for (let i = 0; i < logs.length; i++) {
        const decoded = iface.decodeEventLog("MintedDecisionArray", logs[i].data, logs[i].topics);
        const stripped = {
            tokenStart: Number(decoded.tokenStart._hex),
            decisions: decoded.decisions.map((decision) => Number(decision._hex))
        }
        for (let j = 0; j < stripped.decisions.length; j++) {
            processedLogs.push({
                name: "The Pariah: #" + String(stripped.tokenStart + j),
                description: "The Pariah is an exploration and fusion of classic, gritty, American Comic Art and a concept story of a near-future metropolis haunted by a mysterious killer.",
                image: "ipfs://QmdqsBUpCAXmZ8dWE3vRunwsKWEn9nAUsG6xzYzJBMZFZF",
                attributes: [
                    {
                        trait_type: "Token ID",
                        value: stripped.tokenStart + j
                    },
                    {
                        trait_type: "DNA",
                        value: stripped.decisions[j]
                    },
                    {
                        trait_type: "Gender",
                        code: parseInt(String(stripped.decisions[j]).slice(1, 2)),
                        value: gender[parseInt(String(stripped.decisions[j]).slice(1, 2))]
                    },
                    {
                        trait_type: "Clique",
                        code: parseInt(String(stripped.decisions[j]).slice(2, 3)),
                        value: clique[parseInt(String(stripped.decisions[j]).slice(2, 3))]
                    },
                    {
                        trait_type: "Physique",
                        code: parseInt(String(stripped.decisions[j]).slice(3, 4)),
                        value: physique[parseInt(String(stripped.decisions[j]).slice(3, 4))]

                    },
                    {
                        trait_type: "Mentality",
                        code: parseInt(String(stripped.decisions[j]).slice(4, 5)),
                        value: mentality[parseInt(String(stripped.decisions[j]).slice(4, 5))]
                    },
                ],
                tokenId: stripped.tokenStart + j,
                external_url: "https://thepariah.xyz",
            });
        }

    };

    let dataAsJson = JSON.stringify(processedLogs, null, 2);
    fs.writeFileSync('tokenDecisions.json', dataAsJson);
};

main();

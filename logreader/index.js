// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
    apiKey: "omo3FeOZdHNVkjNiCIg-krzKuB9qtZFa", // Replace with your API key
    network: Network.ETH_GOERLI, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = parseInt(str.substr(o, size));
    }
  
    return chunks
  }

const main = async () => {
    //Initialize variables for the parameters
    let address = "0x47518c21e0be04db5836c401175760487f462ff4"
    let topics =  [ "0x6fb1c409f5d8b7c703b00ba33a0ef38929bfabec859065264a21d2a07eed0f1f" ]
    
    //Call the method to return array of logs
    let response = await alchemy.core.getLogs(address, topics, )

    for (let i = 0; i < response.length; i++) {
        console.log(response[i])
        chunks = chunkSubstr(response[i]['data'].substring(2),64)
        console.log(chunks);
    }
};

main();
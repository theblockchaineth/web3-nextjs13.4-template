"use client";

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = process.env.NEXT_PUBLIC_WC_ID

const { publicClient } = configureChains(chains, [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
    w3mProvider({ projectId })
])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export function WagmiWrapper(props) {

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                {props.children}          
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode="dark" />
        </>
    )

}
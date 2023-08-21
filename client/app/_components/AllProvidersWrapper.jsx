"use client"

import { ReduxProviders } from './redux/Providers'
import { SessionProvider } from "next-auth/react"
import { WagmiWrapper } from "./web3/WagmiWrapper"

import Navbar from "./Navbar"
import Alerts from "./Alerts"


export default function AllProvidersWrapper({ children }) {

    return (
        <ReduxProviders>
            <SessionProvider>
                <WagmiWrapper>
                    <Navbar />
                    <Alerts />
                    {children}
                </WagmiWrapper>
            </SessionProvider>
        </ReduxProviders>
    )
}
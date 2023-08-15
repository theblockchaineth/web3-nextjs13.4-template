"use client";

import { Web3Button } from '@web3modal/react'
import { useSignMessage, useAccount } from 'wagmi'
import { signIn } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const { data, error, isLoading, signMessage, variables } = useSignMessage()
    const { address } = useAccount()
    const searchParams = useSearchParams()
    const redirect = searchParams.get('redirect')

    const callbackUrl = redirect || '/'

    return (
        <div className="bg-white">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Sign into your account
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        Connect wallet, sign, and validate your admin rights.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {!address && <Web3Button />}
                        {address && !data && (
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    const message = 'Validate with Signature'
                                    signMessage({ message })
                                }}
                            >
                                <button disabled={isLoading} className='rounded-md bg-orange-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                                    {isLoading ? 'Check Wallet' : 'Sign Message'}
                                </button>

                                {data && (
                                    <div>
                                        <div>Signature: {data}</div>
                                    </div>
                                )}

                                {error && <div>{error.message}</div>}
                            </form>
                        )}

                        {data && (
                            
                            <button 
                            className='rounded-md bg-pink-600 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-pink-500'
                                onClick={() => signIn('credentials', { username: address, password: data, callbackUrl: callbackUrl })}>Sign in</button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
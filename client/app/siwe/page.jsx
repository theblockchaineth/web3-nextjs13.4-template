"use client";

import { Web3Button } from '@web3modal/react'
import { useSignMessage, useAccount } from 'wagmi'
import { signIn, signOut } from "next-auth/react";
import { useSearchParams } from 'next/navigation'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'
import Loading from '../_components/Loading';

export default function Page() {
    const { data, isLoading, signMessage } = useSignMessage()
    const { address, isReconnecting } = useAccount()
    const searchParams = useSearchParams()
    const redirection = searchParams.get('redirect')
    const { status  } = useSession()
    const callbackUrl = redirection || '/'

    const colourStataManager = () => {
        if (!address) {
            return {
                state: 1,
                onebox: 'bg-white text-black',
                twobox: 'bg-transparent text-gray-600',
                twobtn: 'bg-transparent text-gray-600 ring-1 ring-gray-700',
                threebox: 'bg-transparent text-gray-600',
                threebtn: 'bg-transparent text-gray-600 ring-1 ring-gray-700',
            }
        } else if (!data) {
            return {
                state: 2,
                onebox: 'bg-green-800 text-white',
                twobox: 'bg-white text-black',
                twobtn: 'bg-pink-600 text-white',
                threebox: 'bg-transparent text-gray-600',
                threebtn: 'bg-transparent text-gray-600 ring-1 ring-gray-700',
            }
        } else {
            return {
                state: 3,
                onebox: 'bg-green-800 text-white',
                twobox: 'bg-green-800 text-white',
                twobtn: 'bg-transparent text-white ring-1 ring-gray-700',
                threebox: 'bg-white text-black',
                threebtn: 'bg-pink-600 text-white',
            }
        }
    }

    if (isReconnecting) return <Loading />
    if (status === "loading") return <Loading />

    if (status === 'authenticated') {
        return (
            <>
            <div className="grid h-[85%] place-items-center px-4">
            <div className="grid grid-cols-1">
                <div className='mx-auto flex max-w-lg items-center justify-between'>
                <div className={`my-4 w-full shadow sm:rounded-lg bg-white text-black`}>
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-base font-semibold leading-6">You are already signed in....</h3>
                        <div className="mt-2 max-w-xl text-sm">
                            <p>

                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-5 space-x-3">
                            <a 
                            className={`bg-green-700 text-white hover:opacity-70 text-center w-full rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-700 `}
                            href={callbackUrl}
                                >
                                Go Back
                            </a>
                            <button 
                            className={`bg-red-700 text-white hover:opacity-70  text-center w-full rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-700 `}
                                onClick={() => signOut({redirect: true, callbackUrl: callbackUrl})}>
                                    Sign Out
                            </button>
                       
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="grid mt-8 sm:mt-16 lg:mt-40 place-items-center px-4">
        <div className="grid grid-cols-1 outline p-4 rounded-lg bg-zinc-800 gap-y-3">
            
            <h1 className='w-full text-center font-marker text-lg pb-4'>Connect to The Pariah Servers & Services</h1>
            <div className='mx-auto flex max-w-lg items-center justify-between w-full'>
                <div className={`w-full shadow sm:rounded-lg ${colourStataManager().onebox}`}>
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-base font-semibold leading-6">Step 1: Connect Wallet</h3>
                        <div className="mt-2 max-w-xl text-sm">
                            <p>

                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-5">
                            <Web3Button />  
                            <div className=''>
                                {address && <CheckCircleIcon height={32}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto flex max-w-lg items-center justify-between w-full'>
                <div className={`w-full shadow sm:rounded-lg ${colourStataManager().twobox}`} >
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-base font-semibold leading-6 ">Step 2: Sign Message</h3>
                        <div className="mt-2 max-w-xl text-sm ">
                            <p>
                                This signature is used to verify that you own the wallet you are connecting with.
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mt-5">
                            <form
                            disabled={!data}
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    const message = 'Validate with Signature'
                                    signMessage({ message })
                                }}
                            >
                                <button disabled={data} className={`${colourStataManager().twobtn} inline-flex items-center rounded-md disabled:outline hover:disabled:opacity-100 hover:opacity-70 px-3 py-2 text-sm font-semibold shadow-sm`}>
                                    {isLoading ? 'Check Wallet' : 'Sign Message'}
                                </button>
                            </form>
                            <div className=''>
                                {data && <CheckCircleIcon height={32}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto flex max-w-lg items-center justify-between w-full'>
                <div className={`w-full shadow sm:rounded-lg ${colourStataManager().threebox}`}>
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-base font-semibold leading-6">Step 3: Sign In</h3>
                        <div className="mt-2 max-w-xl text-sm">
                            <p>
                                By allowing us to validate a signature you will be granted a secure session, this will securely enable any access / wallet specific content.
                            </p>
                        </div>
                        <div className="mt-5">
                        <button 
                            disabled={!data || isLoading}
                            className={`w-full rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-700  ${colourStataManager().threebtn}`}
                                onClick={() => signIn('credentials', { username: address, password: data, callbackUrl: callbackUrl })}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
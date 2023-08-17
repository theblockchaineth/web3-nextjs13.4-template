"use client";

import { useEffect, useState } from 'react'
import Loading from '../_components/Loading';
import { useRouter } from "next/navigation";
import { Web3Button } from '@web3modal/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


export default function Page() {
    const [apiCallLoading, setApiCallLoading] = useState(true)
    const [apiData, setApiData] = useState(null)
    const [submitData, setSubmitData] = useState(null)
    const router = useRouter();

    const handleSubmitAndRefresh = async () => {
        const res = await fetch('/api/allowlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await res.json();
        console.log(json);
        setSubmitData(json);
        router.push('/allowlist', { scroll: false });
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/allowlist', {
                next: { revalidate: 100 },
            })
            const json = await res.json();
            console.log(json);
            setApiData(json);
            setApiCallLoading(false);
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (submitData) {
            const fetchData = async () => {
                const res = await fetch('/api/allowlist', {
                    next: { revalidate: 100 },
                })
                const json = await res.json();
                console.log(json);
                setApiData(json);
                setApiCallLoading(false);
            }
            fetchData();
        }
    }, [submitData])

    if (apiCallLoading) return <Loading />
    if (apiData.allowlist) return (
        <section>
            <div className="py-24 sm:py-32">
                <div className="relative isolate">
                    <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-md flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                        <div className="w-full flex-auto">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the allowlist</h2>
                                <h3 className='mt-4'>By joining the allowlist, you will be granted the ability to secure token(s) during the presale phase. This is limited to a single transaction, per wallet, of up to 5 tokens.</h3>
                                <p className='mt-12'><Web3Button /></p>
                                <div className="mt-10 flex">
                                <CheckCircleIcon height={24} width={24} className='mr-4 text-green-600'/>
                                    <p className='text-lg font-bold text-green-600 tracking-wide'>  On the list...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    return (
        <section>
            <div className="py-24 sm:py-32">
                <div className="relative isolate">
                    <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-md flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                            <div className="w-full flex-auto">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the allowlist</h2>
                                <h3 className='mt-4'>By joining the allowlist, you will be granted the ability to secure token(s) during the presale phase. This is limited to a single transaction, per wallet, of up to 5 tokens.</h3>
                                <p className='mt-12'><Web3Button /></p>
                                <div className="mt-10 flex">
                                    <button onClick={() => handleSubmitAndRefresh()} className="text-sm font-semibold leading-6 text-pink-600">
                                        Add to allowlist <span aria-hidden="true">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
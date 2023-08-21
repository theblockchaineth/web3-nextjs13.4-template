"use client";

import { useState, useEffect } from 'react';
import EditModal from './EditModal';
import PublicMintButton from './PublicMintButton';


export default function PublicSale() {

    const presaleMintPrice = 0.02
    const presaleMintLimit = 5
    const [mintAmount, setMintAmount] = useState(presaleMintLimit)
    const [mintItemArray, setMintItemArray] = useState([10000, 10000, 10000, 10000, 10000])
    const [selectedItemIdx, setSelectedItemIdx] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const smartcontract = process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS

    const roundedToFiveDecimals = (num) => {
        return Math.round((num + Number.EPSILON) * 100000) / 100000
    }

    const totalPriceRoundedAsString = roundedToFiveDecimals(presaleMintPrice * mintAmount).toString() || "0.625"

    const fnSetMintItemArrayValue = (index, value) => {
        setMintItemArray(existingItems => {
            return existingItems.map((item, j) => {
                return j === index ? value : item
            })
        })
    }

    function handleCustomizeClick(index) {
        if (mintItemArray[index] !== 10000) {
            fnSetMintItemArrayValue(index, 10000)
        } else {
            setSelectedItemIdx(index)
            setShowModal(true)
        }
    }

    useEffect(() => {
        setMintItemArray(Array.from({ length: mintAmount }, () => 10000))
    }, [mintAmount])

    return (
        <section className="pb-8">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* Main 3 column grid */}
                <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                    {/* Left column */}
                    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                        <section aria-labelledby="section-1-title">
                            <h2 className="sr-only" id="section-1-title">
                                Section title
                            </h2>
                            <div className="overflow-hidden rounded-lg outline-dashed min-h-80 bg-zinc-600/20">

                                <div className="p-6 flex items-center justify-center text-center">
                                    <p className='font-marker text-xl'>
                                        How many to mint?
                                    </p>
                                </div>
                                <div className="p-6">
                                    <input type="range" min={1} max={presaleMintLimit} value={mintAmount} className="range" step="1" onChange={(e) => setMintAmount(e.target.value)} />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                    </div>
                                </div>

                                <div className="flow-root my-8 mx-4">
                                    <ul role="list" className="-mb-8">
                                        {mintItemArray.map((event, eventIdx) => (
                                            <li key={eventIdx}>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div>
                                                                <p className="text-sm text-gray-500">
                                                                    Token <span className='text-white'>#{eventIdx + 1} of {mintAmount}</span>
                                                                </p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                                <p> Type: <span className={`font-bold ${event === 10000 ? "text-teal-700" : "text-blue-600"}`}>{event === 10000 ? "Random" : "Custom"}</span></p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                                <button onClick={() => handleCustomizeClick(eventIdx)} className='btn btn-xs btn-outline'>
                                                                    {event === 10000 ? "Customize this?" : "Randomize this?"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary text-primary-content p-4 m-2 rounded-lg font-mono text-xs">
                                            Please note: The customization feature and user-influenced minting is one provided on an optimisitic basis and one without guarantee of an exact match (due to rarity balances, incompatability of traits, and other factors). In the event that a match cannot be made, the art generation process will default the least amount of your selections to a random, possible, option - to maintain the maximum amount of your influence possible. In theory, this should be no more than one trait replaced; and with gender being the least affected trait type.
                                            
                                </div>

                            </div>
                        </section>
                    </div>

                    {/* Right column */}
                    <div className="grid grid-cols-1 gap-4 ">
                        <section aria-labelledby="section-2-title">
                            <h2 className="sr-only" id="section-2-title">
                                Section title
                            </h2>
                            <div className="overflow-hidden rounded-lg outline-dashed pb-8">
                                <div className="p-6 flex items-center justify-center text-center">
                                    {/* single column flex grid */}
                                    <div className="grid grid-cols-1 gap-4">
                                        <p className='font-marker text-xl'>Minting: {mintAmount} Tokens</p>
                                        <p className='font-marker text-xl'>COST: {roundedToFiveDecimals(mintAmount * presaleMintPrice)} ETH</p>
                                        <PublicMintButton contract={smartcontract} decisions={mintItemArray} quantity={mintAmount} price={totalPriceRoundedAsString} />
                                    </div>
                                </div>                            
                                </div>
                        </section>
                    </div>
                </div>
            </div>
            <EditModal mintItemArray={mintItemArray} setMintItemArray={setMintItemArray} selectedItemIdx={selectedItemIdx} showModal={showModal} setShowModal={setShowModal} fnSetMintItemArrayValue={fnSetMintItemArrayValue} />
        </section>
    )
}
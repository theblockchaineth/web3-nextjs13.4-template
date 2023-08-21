export default function Hero(props) {

    const saleType = () => {
        if (props.presale) {
            return 1
        } else if (props.publicsale) {
            return 2
        } else {
            return 0
        }
    }

    return (
        <>
            <div className="relative sm:pt-8 md:pt-16">
                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="min-h-80">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="/mint-splash.jpg"
                                alt="People working on laptops"
                            />
                            <div className="absolute inset-0 bg-black/70 mix-blend-luminosity" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/100 from-50% to-90%  mix-blend-luminosity" />
                        </div>
                        <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                            <h1 className="text-center text-2xl font-bold tracking-widest sm:text-5xl lg:text-6xl">
                                <span className="block font-marker text-white">
                                    {saleType() === 0 && <>Minting <span className="text-red-600">Not Open</span>, sorry...</>}
                                    {saleType() === 1 && <>Presale Mint <span className="text-green-600">Open</span></>}
                                    {saleType() === 2 && <span className="text-green-600">Public Sale Mint Open</span>}

                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
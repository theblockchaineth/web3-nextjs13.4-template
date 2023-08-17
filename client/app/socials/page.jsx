export default function Page() {
    return (
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-40">
          <div className="text-center">
            <h1 className="text-4xl font-marker tracking-tight sm:text-5xl md:text-6xl">
              <span className="block xl:inline">get updates & more...</span>{' '}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-white/30 sm:text-md md:mt-5 md:max-w-3xl md:text-lg">
              Reach out to me on Twitter / X if you have any questions!
            </p>
            <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <p className="mb-3">Project Account</p>
                <a
                  href="https://twitter.com/thepariahnft"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-600 hover:bg-gray-200 md:px-10 md:py-4 md:text-lg"
                >
                  The Pariah NFT
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                <p className="mb-3 mt-8 sm:mt-0">Dev Account</p>

                <a
                  href="https://twitter.com/tbc_eth"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:px-10 md:py-4 md:text-lg"
                >
                  theblockchain.eth
                </a>
              </div>
            </div>
          </div>
        </main>

    )
}
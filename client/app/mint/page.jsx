export default function Page() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                {/* Content goes here */}
                <div class="flex items-center justify-center h-96">
                    <button
                        type="button"
                        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="mt-2 block text-sm font-marker font-xl ">
                            You are too early... Please check back later.
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
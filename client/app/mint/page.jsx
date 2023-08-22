import PublicSale from './_components/Public'
import Hero from './_components/Hero'

export const dynamic = 'force-dynamic'

export default async function Page() {

    return (
    <main>
        <Hero presale={false} publicsale={true} />
        <div className='bg-black min-h-[calc(85vh)] lg:pt-8'>
            <br />
            <br />
            <PublicSale />
        </div>
    </main>)
}
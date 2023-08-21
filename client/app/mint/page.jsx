import { getSiteConfig } from '../_components/SiteConfig'

import Presale from './_components/Presale'
import PublicSale from './_components/Public'
import Hero from './_components/Hero'

export const dynamic = 'force-dynamic'

export default async function Page() {
    
    const { config, presale, publicsale } = await getSiteConfig()

    return (
    <main>
        <Hero presale={presale} publicsale={publicsale} />
        <div className='bg-black min-h-[calc(85vh)] lg:pt-8'>
            <br />
            <br />
            {presale && <Presale />}
            <br />
            <br />
            {publicsale && <PublicSale />}
        </div>
    </main>)
}
export async function getSiteConfig() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/config`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data',  { next: { revalidate: 0 } })
    }

    const json = await res.json()
    const config = json.rows
    const presale_row = config.filter((config) => config.key === 'presale_open');
    const presale = Boolean(presale_row[0].value);
    const publicsale_row = config.filter((config) => config.key === 'public_open');
    const publicsale = Boolean(publicsale_row[0].value);

    return {
        config, 
        presale,
        publicsale
    }
}

fetch(`https://...`, { next: { revalidate: false | 0 | number } })
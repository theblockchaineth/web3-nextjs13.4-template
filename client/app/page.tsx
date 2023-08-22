import Hero from './_components/Hero'

export default function Home() {
  return (
    <section>
      <div className='m-4'>
        <div className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className='font-marker tracking-wide'>Public Minting Now Open //////// <a href='/mint' className='underline'>Click here to Mint Now</a></span>
        </div>
      </div>
      <Hero />
    </section>
  )
}

import SessionDetails from './_components/SessionDetails'
import GutteredWide from './_layouts/GutteredWide'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <GutteredWide>
        <SessionDetails />
      </GutteredWide>
    </main>
  )
}

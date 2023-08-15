import ThemeSwitcher from './_components/themes/Switcher'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitcher />
      <p>Hello World</p>
      
    </main>
  )
}

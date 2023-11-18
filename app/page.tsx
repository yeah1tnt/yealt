import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello Users</h1>
      <h2>
      <Link href='/youtube'>Youtube Posts</Link>
      </h2>
    </main>
  )
}

import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="py-8 px-12 flex border-b border-gray-300">
        <Link href="/">
          <a>
            <p>Home</p>
          </a>
        </Link>
        <Link href="/auth">
          <a className="ml-10">
            <p>Profile</p>
          </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

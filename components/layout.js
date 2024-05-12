import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'
import { GENRE_LIST, AD_CLIENT_ID } from "../const";
import AdSense from '../components/ads/ad'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="KBWord" />
        <meta property="og:image"  contents="https://cdn-ak.f.st-hatena.com/images/fotolife/A/Amoka/20240512/20240512034629.png"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AdSense />
      <nav className="navbar navbar-expand navbar-light bg-dark gnav">
        <div className="text-center text-white ">
          <ul className="nav nav-pills nav-fill">
            {GENRE_LIST.map((genre) => {
            return (
              <li className="nav-item" key={genre.name}>
                <a className="nav-link " aria-current="page" href={genre.url}>
                  {genre.name}
                </a>
                <p style={{display: 'none'}}>{genre.url}</p>
              </li>
            )
            })}
          </ul>
        </div>
      
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}
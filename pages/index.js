import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Marcel ÀVila" />
        <p className="description">
          Programador especializado en HTML 5 y CSS, con diploma oficial de Sololearn. Tengo varios proyectos 
          que podries ir viendo a continuación. 
        </p>
      </main>

      <Footer />
    </div>
  )
}

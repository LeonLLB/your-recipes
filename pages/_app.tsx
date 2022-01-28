import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }) {

    return (
        <div> 
            <Head>
                <title>Your recipes! Web app for recipes</title>
                {/* <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <div id="background" className='h-screen w-screen relative z-0 flex flex-row justify-center'>
                <main id="body" className='mt-2 rounded-md border-2 border-gray-100 bg-white absolute w-3/4 z-10'>
                    <Component {...pageProps} />
                </main>
            </div>
        </div>
    )
}
import Head from 'next/head'

import {
  HomePageComponent,
} from 'src/views';

/*
  This is like / in routes.
*/
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shreyansh Prakash</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HomePageComponent/>
    </div>
  )
}

import type { NextPage } from 'next';
import Head from 'next/head';
import Quote from '../components/Quote';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Advice generator app | frontendmentor.io</title>
        <meta
          name="description"
          content="Advice generator app | frontendmentor.io"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-32x32.png"
          sizes="32x32"
        />
      </Head>

      <main className="relative flex items-center justify-center min-h-screen">
        <Quote />

        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-app-neutral-blue-grayish px-4 w-full text-center">
          Frontend challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
            target="_blank"
            rel="noreferrer"
          >
            frontendmentor.io
          </a>
          , done by Dominik Rubröder
        </p>
      </main>
    </div>
  );
};

export default Home;

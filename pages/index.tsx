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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen">
        <Quote />
      </main>

      <footer>
        <p className="text-xs">
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
      </footer>
    </div>
  );
};

export default Home;

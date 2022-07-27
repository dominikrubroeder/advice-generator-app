import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface IQuote {
  id: number;
  quote: string;
}

const Quote: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [quote, setQuote] = useState<IQuote | null>(null);

  const fetchQuote = () => {
    setIsLoading(true);

    fetch('https://api.adviceslip.com/advice')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        setError('Fetching advice went wrong');
        throw new Error('Fetching advice went wrong');
      })
      .then((data) => {
        const quote: IQuote = {
          id: data.slip.id,
          quote: data.slip.advice,
        };

        setQuote(quote);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading)
    return (
      <button
        type="button"
        className="flex items-center justify-center bg-app-primary-green-neon text-white rounded-full p-4 animate-bounce"
        disabled
      >
        <LoadingSpinner />
      </button>
    );

  if (!isLoading && error) {
    return (
      <div className="grid gap-2">
        <h1 className="text-white">{error}</h1>
        <button
          className="rounded-full bg-app-primary-green-neon px-4 py-2"
          onClick={fetchQuote}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="relative text-center bg-app-neutral-blue-grayish-dark rounded-xl max-w-[33.75rem] w-full p-8">
      <header className="text-app-primary-green-neon uppercase text-xs tracking-widest mb-4">
        Advice #{!isLoading && quote?.id}
      </header>

      <h1 className="text-white font-bold text-[1.75rem]">
        &ldquo;{!isLoading && quote?.quote}&rdquo;
      </h1>

      <div className="relative my-10">
        <hr className="border-app-neutral-blue-grayish" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 flex gap-2 bg-app-neutral-blue-grayish-dark p-4">
          <span className="w-1.5 h-4 bg-app-primary-cyan-light rounded-full"></span>
          <span className="w-1.5 h-4 bg-app-primary-cyan-light rounded-full"></span>
        </div>
      </div>

      <button
        className="rounded-full h-16 w-16 flex items-center justify-center absolute -bottom-16 left-1/2 bg-app-primary-green-neon -translate-x-1/2 -translate-y-1/2"
        onClick={fetchQuote}
      >
        t
      </button>
    </div>
  );
};

export default Quote;

import React from 'react';

interface IQuote {
  id: number;
  quote: string;
}

const QuoteData: IQuote = {
  id: 117,
  quote:
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};

const Quote: React.FC = () => {
  return (
    <div className="relative text-center bg-app-neutral-blue-grayish-dark rounded-xl max-w-[33.75rem] p-8">
      <header className="text-app-primary-green-neon uppercase text-xs tracking-widest mb-4">
        Advice #{QuoteData.id}
      </header>

      <h1 className="text-white font-bold text-[1.75rem]">
        &ldquo;{QuoteData.quote}&rdquo;
      </h1>

      <div className="relative my-10">
        <hr className="border-app-neutral-blue-grayish" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 flex gap-2 bg-app-neutral-blue-grayish-dark p-4">
          <span className="w-1.5 h-4 bg-app-primary-cyan-light rounded-full"></span>
          <span className="w-1.5 h-4 bg-app-primary-cyan-light rounded-full"></span>
        </div>
      </div>

      <button className="rounded-full h-16 w-16 flex items-center justify-center absolute -bottom-16 left-1/2 bg-app-primary-green-neon -translate-x-1/2 -translate-y-1/2">
        t
      </button>
    </div>
  );
};

export default Quote;

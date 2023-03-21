import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({ quote: '?', author: '!' });

  useEffect(() => {
    const fetchQuote = async () =>
      (await fetch('https://api.quotable.io/random')).json();

    fetchQuote().then((result) => setQuote(result));
  }, []);

  return (
    <>
      <h3>{quote.content}</h3>
      <h4>{quote.author}</h4>
    </>
  );
};

export default Quote;

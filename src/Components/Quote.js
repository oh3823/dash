import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({
    quote: 'Fetching Quote...',
    author: '',
  });

  useEffect(() => {
    const fetchQuote = async () =>
      (await fetch('https://api.quotable.io/random')).json();

    fetchQuote().then((result) => setQuote(result));
  }, []);

  return (
    <div className="quote">
      <h3 className="content">{quote.content}</h3>
      <h4 className="author">{quote.author}</h4>
    </div>
  );
};

export default Quote;

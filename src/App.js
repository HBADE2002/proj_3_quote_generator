import './App.css';
import { useState, useEffect } from 'react';

function getRandomQuote(quotes) { //function to get a random quote
  return quotes[Math.floor(Math.random() * quotes.length)];//random quote from the array of quotes 
} 


function App() {
  const [quotes, setQuotes] = useState([]); //array of quotes 
  const [quote, setQuote] = useState(null); //quote to be displayed

  function getRandomQuote(quotes) { //function to get a random quote
    return quotes[Math.floor(Math.random() * quotes.length)];//random quote from the array of quotes 
  }

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }
  return (
    <main>
      <h1>Project 3: Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text} 
        </h3>
        <i>- {quote?.author}</i>
      </section>
   </main>
  );
}

export default App;

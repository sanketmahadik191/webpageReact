import React from 'react';
import quotesData from './quotes.json';
import styles from './Quotes.css'

const Quotes = () => {
  return (
    <div className='card'>
      {quotesData.map((quoteObj, index) => (
        <div key={index} className='cardInner'>
          <p>{quoteObj.quote}</p>
          <p>- {quoteObj.writer}</p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
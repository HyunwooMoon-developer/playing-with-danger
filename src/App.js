import React, { Component } from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError';
import Rating from './Rating';

class App extends Component {
  render() {
    return (
      
      <div>
        <h1>Here are some currency Value</h1>
        <CurrencyError>
        Germany : <Currency value={21} locale="de-DE" currency="USD" />
        US : <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>
        <h2>The currency values displayed are subject to change without notice.</h2>
        <Rating value={5}/>
      </div>
    );
  }
}

export default App;

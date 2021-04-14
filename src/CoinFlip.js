import { useState } from 'react';
import Coin from './Coin';

/** Renders CoinFlip component
 * 
 *  state:
 *    - numHeads
 *    - numTails
 * 
 *  App -> CoinFlip -> Coin 
 */
function CoinFlip(){
  const [numHeads, setNumHeads] = useState(0);
  const [numTails, setNumTails] = useState(0);
  const [isHead, setIsHead] = useState(null);

  /** Function flips coin when button is clicked */
  function handleFlip(evt){
    let randomVal = Math.floor(Math.random() * 2);
    // console.log(randomVal);
    if (randomVal === 0){
      setNumHeads(numHeads => numHeads + 1);
      setIsHead(true);
    } else {
      setNumTails(numTails => numTails + 1);
      setIsHead(false);
    }
  }

  return (
    <div className="CoinFlip-container">
      <h1>Let's flip a coin!</h1>
      <Coin isHead={isHead}/>
      <button onClick={handleFlip} className="flip-button">FLIP COIN</button>
      <p>Out of {numHeads+numTails} flips, there have been {numHeads} heads and {numTails} tails.</p>
    </div>
  );
}

export default CoinFlip;
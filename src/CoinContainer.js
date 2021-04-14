import { useState } from 'react';
import Coin from './Coin';
import { randomChoice } from './helper';
import headImg from './head.png';
import tailImg from './tail.jpeg';

/** Renders CoinContainer component
 * 
 *  state:
 *    - coin: object of current coin flipped like { side, imgSrc }
 *    - numHeads: integer that counts number of heads flipped
 *    - numTails: integer that counts number of tails flipped
 * 
 *  App -> CoinContainer -> Coin 
 */
function CoinContainer({ coins }){
  const [coin, setCoin] = useState(null);
  const [numHeads, setNumHeads] = useState(0);
  const [numTails, setNumTails] = useState(0);

  /** Function flips coin when button is clicked */
  function handleFlip(){
    let flip = randomChoice(coins);

    setCoin(flip);

    if (flip.side === 'head'){
      setNumHeads(numHeads => numHeads + 1);
    } else {
      setNumTails(numTails => numTails + 1);
    }
  }

  const currCoin = coin
    ? <Coin imgSrc={coin.imgSrc} side={coin.side} />
    : null;

  const title = coin
    ? <h1>Flip again!</h1>
    : <h1>Let's flip a coin!</h1>;

  return (
    <div className="CoinContainer-container">
      {title}
      {currCoin}
      <button onClick={handleFlip} className="currCoin-button">FLIP COIN</button>
      <p>Out of {numHeads+numTails} flips, there have been {numHeads} heads and {numTails} tails.</p>
    </div>
  );
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc: headImg,
    },
    {
      side: "tail",
      imgSrc: tailImg,
    }
  ]
}

export default CoinContainer;
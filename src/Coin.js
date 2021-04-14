import './Coin.css';

/** Renders Coin Component 
 *  
 *  Props:
 *    - imgSrc: link to image
 *    - side: string with the name of the side of the coin like
 *      "head" or "tail"
 * 
 *  CoinContainer -> Coin
*/
function Coin({ imgSrc, side }){
  // console.log("imgSrc = ", imgSrc);
  // console.log("side = ", side);
  return (
    <div className="Coin-container">
      <img src={imgSrc} alt={side}/>
    </div>
  )
}

export default Coin;
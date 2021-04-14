import './Coin.css';

/** Renders Coin Component */
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
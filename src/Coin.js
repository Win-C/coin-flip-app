import './Coin.css';

function Coin({ isHead }){
  return (
    <div className="Coin-container">
      {
        isHead === null
        ? null
        : isHead 
          ? <img src="https://upload.wikimedia.org/wikipedia/en/c/c0/Canadian_Dime_-_obverse.png" alt="heads"/>
          : <img src="https://www.coinsunlimited.ca/image/cache/data/decimal-coins-canada/rolls/2019/2019-canadian-25-cent-caribou-quarter-coin-1-800x800.jpg" alt="tails"/>
      }
    </div>
  )
}

export default Coin;
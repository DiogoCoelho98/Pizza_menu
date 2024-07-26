export default function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p><b style={{color:"#edc84b", letterSpacing: "1.5px"}}>Authentic</b> Italian cuisine<br/>6 creative dishes to choose from<br/>From our stone oven to your home<br/>All organic, all <b style={{color:"#edc84b", letterSpacing:"1.5px"}}>delicious</b></p>
      <ul className="pizzas">
        {pizzaData.map(pizza => (
          <li key={pizza.name} className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}> 
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <div className="pizza-details">
              <p>{pizza.ingredients}</p>
              <span> 
                  {pizza.soldOut ? 'SOLD OUT' : `$${pizza.price}`}
              </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function Menu({pizzaData}){
    return(
        <main className="menu">
        <h2>Our Menu</h2>
      {pizzaData.map((pizza, index) => (
        <div key={index} className="pizza">
          <img src={pizza.photoName} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span><p>Price: ${pizza.price}</p></span>
          {pizza.soldOut && <p>Sold Out</p>}
        </div>
      ))}
    </main>       
    )
}
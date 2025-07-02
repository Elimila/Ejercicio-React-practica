import './Home.css';

const Home = ({ dishes }) => {
  return (
    <section className="home-section">
      <h2>Platos del día</h2>
      <ul className="dish-list">
        {dishes.map((dish) => (
          <li className="dish-card" key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p><strong>Precio: €{dish.price}</strong></p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;




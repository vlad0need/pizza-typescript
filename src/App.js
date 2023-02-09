import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizza.json';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Всі піцци</h2>
          <div class="content__items">
            {pizzas.map((item, i) => (
              <PizzaBlock
                key={item.id}
                image={item.imageUrl}
                title={item.title}
                size={item.sizes}
                category={item.category}
                price={item.price}
                type={item.types}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

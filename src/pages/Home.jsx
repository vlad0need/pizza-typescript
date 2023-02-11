import React from 'react';
import Categories from './../components/Categories';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';

function Home() {
  const [pizzaItem, setPizzaItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярності', sort: "rating" 
  })

  React.useEffect(() => {
    fetch(`https://63e5669e6eded7dd448758ff.mockapi.io/item?${activeCategory > 0 ? `category=${activeCategory}` : ''}&sortBy=${activeSort.sort}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzaItem(json);
        setIsLoading(false);
      });
  }, [activeCategory, activeSort]);

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory} setActiveCategory={(id) => setActiveCategory(id)}  />
        <Sort activeSort={activeSort}  setActiveSort={(id) => setActiveSort(id)} />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzaItem.map((item, i) => (
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
    </>
  );
}
export default Home;
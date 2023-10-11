import React from 'react';
import Categories from './../components/Categories';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';
import { useSelector } from 'react-redux'

function Home() {
  const [pizzaItem, setPizzaItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const activeCategory = useSelector((state) => state.filter.activeCategory)
  const activeSort = useSelector((state) => state.filter.activeSort)

  React.useEffect(() => {
    fetch(`https://63e5669e6eded7dd448758ff.mockapi.io/pizza/?${activeCategory > 0 ? `category=${activeCategory}` : ''}&sortBy=${activeSort.sort}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzaItem(json);
        setIsLoading(false);
      })
  }, [activeCategory, activeSort]);

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory}  />
        <Sort activeSort={activeSort} />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzaItem.map((item) => (
              <PizzaBlock
                key={item.id}
                {...item}
              />
            ))}
      </div>
    </>
  );
}
export default Home;
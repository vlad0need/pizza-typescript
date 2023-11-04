import React from 'react';
import Categories from './../components/Categories';
import Sort from './../components/Sort';
import PizzaBlock from './../components/PizzaBlock';
import Skeleton from './../components/PizzaBlock/Skeleton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzazSlice';

function Home() {
  const { items, status } = useSelector((state) => state.pizza);
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const activeSort = useSelector((state) => state.filter.activeSort);
  const dispatch = useDispatch();

  const getPizzas = async () => {
    dispatch(fetchPizzas({ activeCategory, activeSort }));
    console.log('yess');
  };

  React.useEffect(() => {
    getPizzas();
  }, [activeCategory, activeSort]);

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort activeSort={activeSort} />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {status === 'loading'
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
}
export default Home;

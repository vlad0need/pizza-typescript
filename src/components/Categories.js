import React from 'react';
import { setActiveCategory } from '../redux/slices/filterSlice';
import { useDispatch } from 'react-redux'

function Categories({activeCategory}) {
  const categoriesPizza = ['Усі', 'Мʼясні', 'Вегетеріанські', 'Гриль', 'Гострі', 'Закриті'];
  
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {categoriesPizza.map((value, i) => (
          <li
            key={i}
            onClick={() => dispatch(setActiveCategory(i))}
            className={activeCategory === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

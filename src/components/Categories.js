import React from 'react';

function Categories({activeCategory, setActiveCategory}) {
  const categoriesPizza = ['Усі', 'Мʼясні', 'Вегетеріанські', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categoriesPizza.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveCategory(i)}
            className={activeCategory === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

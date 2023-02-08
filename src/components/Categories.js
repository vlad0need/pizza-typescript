import React from "react";

function Categories(){
    const [activeIndex, setActiveIndex] = React.useState(0)
    const categoriesPizza = ["Усі", "Мʼясні", "Вегетеріанські", "Гриль", "Гострі", "Закриті"]
    
    return(
        <div class="categories">
              <ul>
                {categoriesPizza.map((value, i) => (
                    <li key={i} onClick={()=> setActiveIndex(i)} className={activeIndex === i ? "active" : ""}>{value}</li>
                ))}
              </ul>
            </div>
    )
}
export default Categories;
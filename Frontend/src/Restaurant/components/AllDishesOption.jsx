import React, { useState } from "react";

import MenuOptionCard from "../../Shared/UI/MenuOptionCard";
import { DishCategories } from "../../Shared/dishes/DishCategories";
import AllMenu from "./Menu/AllMenu";

const AllDishesOption = (props) => {
  const [category, setCategory] = useState("All");
  const [isSelected, setIsSelected] = useState(DishCategories);

  const setDishCategory = (category) => {
    setCategory(category);
    setIsSelected((prevItems) =>
      prevItems.map((item) =>
        item.category === category
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  return (
    <React.Fragment>
      <div className="mt-8 mb-8 m-auto text-center">
        <p className="m-auto text-4xl text-red-100 font-medium text-_112D4E">
          O<span className="border-b-4 rounded-lg mb-4">ur Hot</span> Dishes
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-[90vw] m-auto">
        {isSelected.map((dish) => (
          <MenuOptionCard
            key={dish.title}
            image={dish.image}
            title={dish.title}
            onClick={setDishCategory}
            category={dish.category}
            selected={dish.selected}
          />
        ))}
      </div>
      <AllMenu category={category} />
    </React.Fragment>
  );
};

export default AllDishesOption;

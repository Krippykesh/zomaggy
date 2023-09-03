import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealList";

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);
   
  return <MealsList items={displayedMeals}/>
}

export default MealsOverViewScreen;



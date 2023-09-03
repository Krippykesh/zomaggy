import { useContext } from 'react';
import { StyleSheet ,Text,View} from 'react-native';
import MealsList from '../components/MealList/MealList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen(){
    const FavoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal)=> FavoriteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0){
        return <View style={styles.root}>
            <Text style={styles.text}>NO Maiden</Text>
        </View>
    }
return (
<MealsList items={favoriteMeals}/>
)
}

export default FavoritesScreen;

const styles =StyleSheet.create({
 root:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
 },
 text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
 }
})
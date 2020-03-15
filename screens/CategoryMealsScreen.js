import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Color';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail', params: {
                        mealId: itemData.item.id
                    }
                })
            }} />
    }


    const catId = props.navigation.getParam('categoryId');

    // const selectedCatogory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            {/* <Text>The Category Meal Screen !</Text>
            <Text>{selectedCatogory.title}</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }} />
            <Button title="Go Back" onPress={() => {
                // props.navigation.goBack();
                props.navigation.pop();
            }} /> */}

            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCatogory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCatogory.title,
        // headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;
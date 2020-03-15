import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';


import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            color= {itemData.item.color}
            title={itemData.item.title}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id
                    }
                });
            }
            } />

    }

    return (
        // <View style={styles.screen}>
        //     <Text>The Categories Screen !</Text>
        //     <Button title="Go to Meals!" onPress = {()=>{
        //          props.navigation.navigate({routeName:'CategoryMeals'})
        //         // props.navigation.push('CategoryMeals')
        //         // props.navigation.replace('CategoryMeals')
        //     }}/>
        // </View>
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />

    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesScreen;
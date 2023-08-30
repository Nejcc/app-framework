import {View, Text, FlatList, Touchable} from 'react-native'
import React from 'react'
import CategoryItem from "./CategoryItem";

export default function CategoryList() {

    const categoryList = [
        {
            id :1,
            name : "Gas Station",
            value : 'gas_station',
            icon: require('./../../../assets/gas.png'),
        },
        {
            id :2,
            name : "Resturants",
            value : 'restaurants',
            icon: require('./../../../assets/food.png'),
        },
        {
            id :2,
            name : "Cafe",
            value : 'cafe',
            icon: require('./../../../assets/cafe.png'),
        }
    ];

    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontSize: 20,
                fontFamily: 'raleway'
            }}>Category List</Text>

            <FlatList data={categoryList} showsHorizontalScrollIndicator={false} renderItem={({item})=>(
                <View >
                    <CategoryItem category={item}/>
                </View>
            )} />
        </View>
    )
}
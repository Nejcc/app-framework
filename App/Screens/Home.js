import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Header from "../Components/Home/Header";
import CategoryList from "../Components/Home/CategoryList";
// import GoogleMapView from "../Components/Home/GoogleMapView";

export default function Home(){
    return (
        <View style={{padding:20, marginTop:20}}>
            <Header/>

            <CategoryList />
        </View>
    )
}


// const styles = StyleSheet.create({
//     containerHeader:{
//         padding:20,
//     }
// })
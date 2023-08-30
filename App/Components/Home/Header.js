import {StyleSheet, View, Text, Image, TextInput, Dimensions} from 'react-native'
import React from 'react'
import Colors from "../../Shared/Colors";

export default function Header(){
    return (
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', gap: 10, alignItems: 'center'}}>
            <Image
                source={require('./../../../assets/logo.png')}
                style={styles.logo}
            />
            <View>
                <TextInput
                    placeholder='Search...'
                    style={styles.searchBar}
                />
            </View>
            <Image
                source={require('./../../../assets/user.png')}
                style={styles.userImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50
    },
    searchBar:{
        borderWidth : 1,
        borderColor: Colors.black,
        padding: 10,
        marginTop:8,
        margin: 8,
        paddingLeft: 10,
        width: Dimensions.get('screen').width*0.6,
        borderRadius:50
    },
    userImage:{
        borderRadius:100,
        height:50,
        width:50
    }
})
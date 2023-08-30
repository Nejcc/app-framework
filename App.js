import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import {useFonts} from 'expo-font';

export default function App() {

    const [fontsLoaded] = useFonts({
        'raleway': require('./assets/Fonts/Raleway-Regular.ttf'),
        'raleway-bold': require('./assets/Fonts/Raleway-SemiBold.ttf'),
    })

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <TabNavigation></TabNavigation>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // padding: 20,
    },
});

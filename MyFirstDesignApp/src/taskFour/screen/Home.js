import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Home Screen!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    text: {
        fontSize: 25,
    },
})
export default Home;
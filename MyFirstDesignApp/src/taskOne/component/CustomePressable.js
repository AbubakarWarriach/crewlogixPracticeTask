import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

const CustomePressable = () => {
    return (
        <View style={styles.buttonView}>
            <Pressable
                style={styles.button}
                android_ripple={{color: '#0984e3'}}
            >
                <Text style={styles.buttonText}>Pressable Button</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonView: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00b894',
        minWidth: 150,
        maxWidth: 200,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
    },
    buttonText: {
        color: "#ffff",
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default CustomePressable
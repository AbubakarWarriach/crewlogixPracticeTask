import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

const CustomePressable = ({ title, handle_press }) => {
    
    return (
        <View style={styles.buttonView}>
            <Pressable
                style={styles.button}
                android_ripple={{ color: '#f8c291' }}
                onPress={handle_press}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonView: {
        width: '100%',
    },
    button: {
        backgroundColor: '#e55039',
        width: '85%',
        marginLeft: '7%',
        marginRight: '7%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        marginTop: 15,
    },
    buttonText: {
        color: "#ffff",
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 17,
        // paddingLeft: 10,
        // paddingRight: 10,
    }
})
export default CustomePressable
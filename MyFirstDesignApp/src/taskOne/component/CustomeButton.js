import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";

const CustomeButton = () => {
    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                underleyColor="#dddd"
                onPress={()=>Alert.alert("Thank you!")}
            >
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
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
        width: 150,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
    },
    buttonText: {
        color: "#ffff",
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
})
export default CustomeButton;
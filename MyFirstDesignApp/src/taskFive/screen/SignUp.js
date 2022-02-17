import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { SET_USER_DETAIL } from "../store/reducer/AuthReducer";

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const handlePress = () => {
        dispatch({ type: SET_USER_DETAIL, payload: { name, email, password } });
        Alert.alert("Message", "Registration Successfull");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please create account!</Text>

            <TextInput
                style={styles.input}
                onChangeText={(name) => setName(name)}
                value={name}
                placeholder="Enter name..."
            />

            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder="Enter email..."
            />

            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholder="Enter password..."
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>

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
        fontWeight: '600',
        marginBottom: 40,
    },
    input: {
        width: '85%',
        height: 40,
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        width: "85%",
        marginLeft: "7%",
        marginRight: '7%',
        marginTop: 10,
        backgroundColor: '#079992',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: '#fff',
    }
})
export default SignUp;
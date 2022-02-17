import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handlePress = () => {
        Alert.alert("User Details", `Email=${email}, Password=${password}`);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Please login!</Text>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder="Enter email..."
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholder="Enter password..."
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>Login</Text>
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
export default Login;
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGOUT } from "../store/reducer/AuthReducer";

const Home = () => {
    const {userDetail} = useSelector((state)=>state.AuthReducer);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({type: SET_LOGOUT});
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {userDetail.name}</Text>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleLogout}
            >
                <Text style={styles.buttonText}>LOGOUT</Text>
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
export default Home;
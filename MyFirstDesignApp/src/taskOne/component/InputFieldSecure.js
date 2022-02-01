import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Dimensions } from "react-native";
const {width} = Dimensions.get('window');
const InputFieldSecure = () => {
    const [show, setShow] = useState(false);

    return (
        <View style={styles.inputMainView}>
            <Text style={styles.inputLabel}>Enter Strong Password</Text>
            <View style={styles.inputField}>
                <TextInput
                    style={ styles.input }
                    secureTextEntry={show}
                    placeholder="Enter Password"
                />
                <TouchableOpacity onPress={()=>setShow(!show)} activeOpacity={0.6}>
                    <Text style={styles.touchableText}>click</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputMainView: {
        width: '100%',
    },
    inputLabel: {
        textAlign: 'left',
        fontSize: 16,
        color: 'grey',
        marginLeft: '7%',
    },
    inputField: {
        width: '85%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f1f2f6',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: 15,
    },
    input: {
        paddingLeft: 12,
        width: '70%',
    },
    touchableText: {
        paddingRight: 12,
        color: '#ff7f50',
        fontSize: 16,
    }
})
export default InputFieldSecure;
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Dimensions } from "react-native";
// const {width} = Dimensions.get('window');
const InputFieldSecure = ({labelText, placeholder, handle_change_password, value, passwordError}) => {
    const [show, setShow] = useState(true);

    return (
        <View style={styles.inputMainView}>
            <Text style={styles.inputLabel}>{labelText}</Text>
            <View style={[styles.inputField, passwordError && {borderColor: '#e55039'}]}>
                <TextInput
                    style={ styles.input }
                    secureTextEntry={show}
                    placeholder={placeholder}
                    onChangeText={handle_change_password}
                    value={value}
                />
                <TouchableOpacity onPress={()=>setShow(!show)} activeOpacity={0.6}>
                    <Text style={styles.touchableText}>{show ? "show" : "Hide"}</Text>
                </TouchableOpacity>
            </View>
            {passwordError && <Text style={styles.errorText}>Minimum 6 character enter</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    inputMainView: {
        marginTop: 20,
        width: '100%',
    },
    inputLabel: {
        textAlign: 'left',
        fontSize: 14,
        color: 'grey',
        marginLeft: '7%',
        marginBottom: 4,
    },
    inputField: {
        width: '85%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: 5,
    },
    input: {
        paddingLeft: 12,
        width: '70%',
    },
    touchableText: {
        paddingRight: 12,
        color: '#e55039',
        fontSize: 16,
    },
    errorText: {
        color: '#e55039',
        marginLeft: '7%',
        fontSize: 12,
    },
})
export default InputFieldSecure;
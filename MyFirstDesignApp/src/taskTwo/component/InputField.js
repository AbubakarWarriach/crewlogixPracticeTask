import React from "react";
import { StyleSheet, TextInput, View, Text, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const InputField = ({ labelText, placeholder, handle_email_change, value, emailError }) => {
    // const [show, setShow] = useState(false);
    return (
        <View style={styles.inputMainView}>
            <Text style={styles.inputLabel}>{labelText}</Text>
            <View style={[styles.inputField, emailError && {borderColor: '#e55039'}]}>
                <TextInput
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={handle_email_change}
                    value={value}
                />
            </View>
            {emailError && <Text style={styles.errorText}>Please enter valiad email</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    inputMainView: {
        width: '100%',
    },
    inputLabel: {
        textAlign: 'left',
        fontSize: 14,
        color: 'grey',
        marginBottom: 4,
        marginLeft: '7%',
    },
    inputField: {
        width: '85%',
        marginLeft: '7%',
        marginRight: '7%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    input: {
        paddingLeft: 12,
        width: '100%',
    },
    errorText: {
        color: '#e55039',
        marginLeft: '7%',
        fontSize: 12,
    },
})
export default InputField;
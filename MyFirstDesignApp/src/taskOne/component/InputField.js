import React from "react";
import { StyleSheet, TextInput, View, Text, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const InputField = () => {
    // const [show, setShow] = useState(false);
    return (
        <View style={styles.inputMainView}>
            <Text style={styles.inputLabel}>Enter First Name</Text>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                />
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
        marginBottom: 4,
        marginLeft: '7%',
    },
    inputField: {
        width: '85%',
        marginLeft: '7%',
        marginRight: '7%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#f1f2f6',
    },
    input: {
        paddingLeft: 12,
        width: '100%',
    },
})
export default InputField;
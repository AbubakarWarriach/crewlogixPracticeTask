import React, { useState } from "react";
import { StyleSheet, Picker, View, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const CustomePicker = ({ labelText, handle_change_gender, genderError }) => {
    // const [selectedValue, setSelectedValue] = useState("select gender");
    return (
        <View style={styles.inputMainView}>
            <Text style={styles.inputLabel}>{labelText}</Text>
            <View style={[styles.inputField, genderError && { borderColor: '#e55039' }]}>
                <RNPickerSelect
                    onValueChange={handle_change_gender}
                    // pickerProps={{
                    //     accessibilityLabel: "please select gender",
                    // }}
                    // placeholder = "please select gender"
                    items={[
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' },
                    ]}
                />
                {/* <Picker
                    selectedValue={selectedValue}
                    style={styles.input}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
            </View>
            {genderError && <Text style={styles.errorText}>Please select gender</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    inputMainView: {
        width: '100%',
        marginBottom: 20,
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
export default CustomePicker;
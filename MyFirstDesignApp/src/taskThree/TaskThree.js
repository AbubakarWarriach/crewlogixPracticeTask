import React, { useState } from "react";
import { StyleSheet, Text, Dimensions, ToastAndroid, Pressable, ScrollView, StatusBar } from "react-native";
import CustomePicker from "./component/CustomePicker";
import CustomePressable from "./component/CustomePressable";
import InputField from "./component/InputField";
import InputFieldSecure from "./component/InputFieldSecure";
const { height } = Dimensions.get('screen');

const TaskThree = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const handle_change_name = (name) => {
        setName(name);
        if (name.length < 6 && name.length !== 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }
    const handle_email_change = (email) => {
        setEmail(email);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(email) && email.length !== 0) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }
    }
    const handle_change_password = (password) => {
        setPassword(password);
        if (password.length < 6 && password.length !== 0) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }
    const handle_change_gender = (gender) => {
        setGender(gender);
        if (gender.length !== 0) {
            setGenderError(false);
        } else {
            setGenderError(true);
        }
    }
    const handle_press = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) && password.length >= 6 && name.length >= 6 && gender.length !== 0) {
            ToastAndroid.showWithGravityAndOffset(
                "Create Account successfully!",
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                0,
                70
            )
        }
        else {
            if (!reg.test(email)) {
                setEmailError(true);
            }
            if (password.length < 6) {
                setPasswordError(true);
            }
            if (name.length < 6) {
                setNameError(true);
            }
            if (gender.length == 0) {
                setGenderError(true);
            }
        }
    }
    const handlePressNavigate = () => {
        navigation.navigate('Login');
    }
    return (
        <ScrollView style={styles.body}>
            <StatusBar
                animated={true}
                backgroundColor="#e55039"
            />
            <Text style={styles.mainTitleText}>Create Account</Text>
            <Text style={styles.msgTitleText}>Please enter required information</Text>

            <InputField
                labelText="Please enter full name*"
                placeholder="Enter full name..."
                handle_change={handle_change_name}
                value={name}
                textError={nameError}
            />

            <InputField
                labelText="Please enter email*"
                placeholder="Enter email..."
                handle_change={handle_email_change}
                value={email}
                textError={emailError}
            />

            <InputFieldSecure
                labelText="Please enter password*"
                placeholder="Enter password..."
                handle_change_password={handle_change_password}
                value={password}
                passwordError={passwordError}
            />

            <CustomePicker
                labelText="Please select gender"
                handle_change_gender={handle_change_gender}
                genderError={genderError}
            />

            <CustomePressable title="Sign Up" handle_press={handle_press} />

            {/* <Text style={styles.forgetText}>Forgot Password?</Text> */}
            <Text style={styles.messageText}>
                If your have an accout?
                <Pressable onPress={handlePressNavigate}>
                    <Text style={{ color: '#6a89cc', fontSize: 16, marginTop: 10 }}> Login</Text>
                </Pressable>
            </Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1f2f6',
        paddingBottom: 100,
        // marginBottom: 20,
    },
    mainTitleText: {
        color: '#57606f',
        marginTop: height / 11,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        color: '#57606f',
        fontFamily: 'DancingScript-Bold',
    },
    msgTitleText: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#57606f',
        marginBottom: 30,
    },
    // forgetText: {
    //     color: '#6a89cc',
    //     fontSize: 18,
    //     fontWeight: '400',
    //     marginTop: 40,
    //     textAlign: 'center',
    // },
    messageText: {
        marginTop: 50,
        marginBottom: 50,
        fontSize: 16,
        textAlign: 'center',
    }
})
export default TaskThree;
import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, ToastAndroid } from "react-native";
import CustomeModel from "./component/CustomeModel";
import CustomePressable from "./component/CustomePressable";
import InputField from "./component/InputField";
import InputFieldSecure from "./component/InputFieldSecure";
const { height } = Dimensions.get('screen');

const TaskTwo = () => {
    // let chekHeight = height/12;
    // console.log(chekHeight);
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState(false);
    // const [modalVisible, setModalVisible] = useState(false);
    const handle_email_change = (email) => {
        setEmail(email);
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(email)) {
            setEmailError(true);
            // console.log("runing success");
        }
        else {
            setEmailError(false);
        }
    }
    const handle_change_password = (password) => {
        setPassword(password);
        if (password.length < 6 && password.length !== 0) {
            setPasswordError(true)
        } else {
            setPasswordError(false);
        }
    }
    const handle_press = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) && password.length >= 6) {
            ToastAndroid.showWithGravityAndOffset(
                "Login successfully!",
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                0,
                70
            )
        }
        else {
            setEmailError(true);
            setPasswordError(true);
        }
    }
    return (
        <View>
            {/* <CustomeModel modalVisible={modalVisible} /> */}
            <Text style={styles.mainTitleText}>Welcome Back</Text>
            <Text style={styles.msgTitleText}>Please enter required information</Text>
            <InputField
                labelText="Please enter email*"
                placeholder="Enter email..."
                handle_email_change={handle_email_change}
                value={email}
                emailError={emailError}
            />
            <InputFieldSecure
                labelText="Please enter password*"
                placeholder="Enter password..."
                handle_change_password={handle_change_password}
                value={password}
                passwordError={passwordError}
            />
            <CustomePressable title="Login" handle_press={handle_press} />
            <Text style={styles.forgetText}>Forgot Password?</Text>
            <Text style={styles.messageText}>Do not have an accout? <Text style={{ color: '#6a89cc' }}>Sign Up</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainTitleText: {
        color: '#57606f',
        marginTop: height / 11,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
    },
    msgTitleText: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: '#57606f',
        marginBottom: 50,
    },
    forgetText: {
        color: '#6a89cc',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 40,
        textAlign: 'center',
    },
    messageText: {
        marginTop: 120,
        fontSize: 16,
        textAlign: 'center',
    }
})
export default TaskTwo;
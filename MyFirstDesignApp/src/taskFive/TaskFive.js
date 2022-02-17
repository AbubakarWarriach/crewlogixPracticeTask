import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import AddProduct from "./screen/AddProduct";
import Home from "./screen/Home";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import UserDashboard from "./screen/UserDashboard";

const TaskFive = () => {
    const regisScreens = ["Home", "AddProduct", "Dashboard"];
    const unRegisScreens = ["Login", "SignUp"];
    const [pageStatus, setPageStatus] = useState(0);
    const { user } = useSelector((state) => state.AuthReducer);
    console.log(user);
    // console.log(userDetail);
    return (
        <View style={styles.mainView}>
            <StatusBar
                backgroundColor="#079992"
            />
            {!user ? <>
                <View style={styles.customeTabView}>
                    {unRegisScreens.map((page, ind) => {
                        return (
                            <TouchableOpacity
                                key={ind}
                                style={[styles.unregisterTab, ind === pageStatus && { backgroundColor: '#4b7bec', color: '#f5f6fa' }]}
                                onPress={() => setPageStatus(ind)}
                            >
                                <Text style={styles.customeTabText}>{page}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {pageStatus === 0 && <Login />}
                {pageStatus === 1 && <SignUp />}
            </> : <>
                <View style={styles.customeTabView}>
                    {regisScreens.map((page, ind) => {
                        return (
                            <TouchableOpacity
                                key={ind}
                                style={[styles.registerTab, ind === pageStatus && { backgroundColor: '#4b7bec', color: '#f5f6fa' }]}
                                onPress={() => setPageStatus(ind)}
                            >
                                <Text style={styles.customeTabText}>{page}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {pageStatus === 0 && <Home />}
                {pageStatus === 1 && <AddProduct />}
                {pageStatus === 2 && <UserDashboard />}
            </>}
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        // width: '100%',
    },
    customeTabView: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#3867d6',
    },
    registerTab: {
        width: '33%',
    },
    unregisterTab: {
        width: '50%',
    },
    customeTabText: {
        color: '#dcdde1',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
})
export default TaskFive;
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TaskThree from "../taskThree/TaskThree";
import TaskTwo from "../taskTwo/TaskTwo";


const CustomeTabNavigation = () => {
    const screens = ["SignUp", "Login"];
    const [pageStatus, setPageStatus] = useState(0);
    // const handleTabPress = (pageNo) => {
    //     setPageStatus(pageNo);
    // }
    return (
        <View style={styles.mainView}>
            <View style={styles.customeTabView}>
                {screens.map((page, ind) => {
                    return (
                        <TouchableOpacity
                            key={ind}
                            style={[styles.customeTab, ind === pageStatus && { backgroundColor: '#4b7bec' }]}
                            onPress={() => setPageStatus(ind)}
                        >
                            <Text style={styles.customeTabText}>{page}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {pageStatus === 0 && <TaskThree />}
            {pageStatus === 1 && <TaskTwo /> }
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    customeTabView: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#3867d6',
    },
    customeTab: {
        width: '50%',
    },
    customeTabText: {
        color: '#ffff',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
})
export default CustomeTabNavigation;
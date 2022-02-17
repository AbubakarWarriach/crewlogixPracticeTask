import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Home from "./screen/Home";
import Product from "./screen/Product";


const TaskFour = () => {
    const screens = ["Home", "Product"];
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
                            style={[styles.customeTab, ind === pageStatus && { backgroundColor: '#4b7bec', color: '#f5f6fa' }]}
                            onPress={() => setPageStatus(ind)}
                        >
                            <Text style={styles.customeTabText}>{page}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {pageStatus === 0 && <Home />}
            {pageStatus === 1 && <Product /> }
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
    customeTab: {
        width: '50%',
    },
    customeTabText: {
        color: '#dcdde1',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
})
export default TaskFour;
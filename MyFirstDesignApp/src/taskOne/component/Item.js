import React, { useState } from 'react';
import { StyleSheet, ScrollView, RefreshControl, Text, View } from 'react-native';

const Item = () => {

    const [Items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 9, item: 'Item 9' },
        { key: 10, item: 'Item 10' },
        { key: 11, item: 'Item 11' },
        { key: 12, item: 'Item 12' },
        { key: 13, item: 'Item 13' },
    ]);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl colors={["#1B9CFC"]} />
            }
        >
            {Items.map((val) => {
                return (
                    <View style={styles.item} key={val.key}>
                        <Text style={styles.text}>{val.item}</Text>
                    </View>
                )
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 10,
        backgroundColor: '#55E6C1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#57606f',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10,
    },
});

export default Item;

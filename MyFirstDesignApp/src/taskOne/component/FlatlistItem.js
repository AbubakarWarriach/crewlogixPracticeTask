import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatlistItem = () => {

    const [Items, setItems] = useState([
        { key: 101, name: 'Name 1' },
        { key: 102, name: 'Name 2' },
        { key: 103, name: 'Name 3' },
        { key: 104, name: 'Name 4' },
        { key: 105, name: 'Name 5' },
        { key: 106, name: 'Name 6' },
        { key: 107, name: 'Name 7' },
        { key: 108, name: 'Name 8' },
        { key: 109, name: 'Name 9' },
        { key: 110, name: 'Name 10' },
        { key: 111, name: 'Name 11' },
        { key: 112, name: 'Name 12' },
        { key: 113, name: 'Name 13' },
    ]);

    return (
        <>
            <FlatList
                // numColumns={2}
                // keyExtractor={(item, index) => index.toString()}
                data={Items}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
        </>
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

export default FlatlistItem;

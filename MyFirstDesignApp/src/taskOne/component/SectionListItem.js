import React from "react";
import { SectionList, StyleSheet, View, Text } from "react-native";

const SectionListItem = () => {
    const DATA = [
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
        },
        {
            title: 'Title 2',
            data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
        },
        {
            title: 'Title 3',
            data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
        },
        {
            title: 'Title 4',
            data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
        },
    ];
    return (
        <>
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={DATA}
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={styles.itemList}>
                        <Text style={styles.text}>{section.title}</Text>
                    </View>
                )}
            />
        </>
    )
}
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
    itemList: {
        margin: 10,
        backgroundColor: '#2ed573',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})
export default SectionListItem;
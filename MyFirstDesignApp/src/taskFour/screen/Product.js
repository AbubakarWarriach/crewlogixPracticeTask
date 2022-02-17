// import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";

const Product = () => {
    const [posts, setPosts] = useState();
    const getPostData = async () => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
            return response.json();
        }).then((data) => {
            setPosts(data);
        }).catch((error) => {
            console.log(error.response);
            Alert.alert("Error", "Server Error!");
        })
    }
    useEffect(() => {
        getPostData();
    }, [])
    return (
        <View style={styles.container}>
            {!posts ? <Text style={styles.loadingText}>
                loading...
            </Text> : <FlatList
                data={posts}
                renderItem={({ item }) => item.userId === 1 ? (
                    <View style={styles.cardView}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.bodyText}>{item.body}</Text>
                    </View>
                ) : (<></>)
            }
            />}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    loadingText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: '50%',
    },
    cardView: {
        width: '85%',
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: '#55E6C1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    titleText: {
        fontSize: 20,
        color: "#ffff",
        padding: 12,
        textAlign: 'center',
        textTransform: 'capitalize',

    },
    bodyText: {
        padding: 12,
        fontSize: 15,
    },
})
export default Product;
import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FastImage from "react-native-fast-image";

// const {width} = Dimensions.get("window");

const ImageView = () => {
    const [imgLoad1, setImageLoad1] = useState(true);
    const [imgLoad2, setImageLoad2] = useState(true);
    return (
        <View style={styles.imageView}>

            {imgLoad1 && <Text style={styles.textLoad}> Image Loading</Text>}
            <Image
                style={styles.img}
                source={require('../Images/slide-1.jpg')}
                onLoad={()=>setImageLoad1(false)}
            />

            {imgLoad2 && <Text style={styles.textLoad}> Image Loading</Text>}
            <FastImage
                style={styles.img}
                source={{
                    uri: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
                    // headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
                onLoad={()=>setImageLoad2(false)}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    imageView: {
        margin: 12,
    },
    img: {
        width: 337,
        height: 200,
        marginBottom: 10,
    },
    textLoad: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
    },
})
export default ImageView;
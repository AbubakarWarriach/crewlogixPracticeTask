import React from "react";
import { StyleSheet, Modal, View } from "react-native";

const CustomeModel = ({modalVisible}) => {

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalView}>
                <View style={styles.modalBox}></View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: 300,
        height: 300,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
})
export default CustomeModel;
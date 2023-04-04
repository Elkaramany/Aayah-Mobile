import React, { ReactNode, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { scale } from 'react-native-size-matters';

interface Props {
    isVisible: boolean
    onClose: () => void
    children: ReactNode
}

const CustomModal: React.FC<Props> = ({ children, isVisible, onClose }) => {
    const [modalVisible, setModalVisible] = useState(isVisible);

    const handleBackdropPress = () => {
        setModalVisible(false);
        onClose();
    };

    return (
        <Modal
            isVisible={modalVisible}
            onBackdropPress={handleBackdropPress}
            backdropOpacity={0.5}
            useNativeDriver={true}
            style={styles.modalContainer}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { }}
                style={styles.modalContent}
            >
                <View style={styles.modalView}>
                    {children}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
    },
    modalContent: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '90%',
        height: '70%',
        borderRadius: scale(30),

    },
    modalView: {
        flex: 1,
        padding: scale(20)
    },
});

export default CustomModal;

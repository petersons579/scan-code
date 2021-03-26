import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanCode = ({ scanned, handleBarCode, handleClose }) => {

    const handleChange = ({ type, data }) => {
        if (data) {
            handleBarCode(data);
            handleClose();
        }
    };

    return (
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleChange}
            style={styles.absolute}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
        />
    );
};

export default ScanCode;

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 30
    },
});
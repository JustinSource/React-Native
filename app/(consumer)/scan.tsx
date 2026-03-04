import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScaColors } from '../../constants/theme';

export default function ScanScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, [permission]);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <TouchableOpacity onPress={requestPermission} style={styles.button}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const handleBarCodeScanned = ({ data }: { data: string }) => {
        if (scanned) return;
        setScanned(true);
        // Navigate to Product Passport with mock ID
        router.push('/product/SCA-123456' as any);

        // Reset scanned state after a short delay to allow scanning again if returned
        setTimeout(() => setScanned(false), 2000);
    };

    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
            >
                <View style={styles.overlay}>
                    <View style={styles.unfocusedContainer}></View>
                    <View style={styles.middleContainer}>
                        <View style={styles.unfocusedContainer}></View>
                        <View style={styles.focusedContainer}>
                            {/* Scanning Frame */}
                            <View style={[styles.corner, styles.topLeft]} />
                            <View style={[styles.corner, styles.topRight]} />
                            <View style={[styles.corner, styles.bottomLeft]} />
                            <View style={[styles.corner, styles.bottomRight]} />
                        </View>
                        <View style={styles.unfocusedContainer}></View>
                    </View>
                    <View style={styles.unfocusedContainer}>
                        <Text style={styles.scanText}>Quét mã QR trên sản phẩm</Text>
                    </View>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
        color: '#fff',
    },
    button: {
        backgroundColor: ScaColors.primary,
        padding: 15,
        borderRadius: 8,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    unfocusedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContainer: {
        flexDirection: 'row',
        height: 250,
    },
    focusedContainer: {
        width: 250,
        height: 250,
        position: 'relative',
    },
    corner: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderColor: ScaColors.primary,
        borderWidth: 4,
    },
    topLeft: { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0 },
    topRight: { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0 },
    bottomLeft: { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0 },
    bottomRight: { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0 },
    scanText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '85%',
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    closeButton: {
        padding: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    productBrand: {
        fontSize: 16,
        color: '#666',
    },
    modalBody: {
        flex: 1,
    },
    section: {
        marginBottom: 20,
    },
    ecoScoreRow: {
        flexDirection: 'row',
        gap: 12,
    },
    ecoBadge: {
        backgroundColor: ScaColors.consumer,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
        gap: 8,
    },
    ecoText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    verifiedBadge: {
        borderWidth: 1,
        borderColor: ScaColors.consumer,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
        gap: 8,
    },
    verifiedText: {
        fontWeight: 'bold',
    },
    idCard: {
        backgroundColor: '#f8f9fa',
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 25,
    },
    idText: {
        color: '#666',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    timelineContainer: {
        paddingLeft: 10,
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    timelineLeft: {
        alignItems: 'center',
        width: 20,
    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginTop: 4,
        zIndex: 1,
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: '#eee',
    },
    timelineRight: {
        flex: 1,
        paddingLeft: 15,
    },
    timelineHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    timelineEvent: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    timelineDate: {
        fontSize: 12,
        color: '#999',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 4,
    },
    timelineLocation: {
        fontSize: 14,
        color: '#666',
    },
    timelineDetail: {
        fontSize: 14,
        color: '#888',
        lineHeight: 20,
    },
    certContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    certBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F8EE',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        gap: 6,
    },
    certText: {
        color: '#2ECC71',
        fontWeight: '600',
        fontSize: 13,
    },
    actionButton: {
        backgroundColor: ScaColors.consumer,
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

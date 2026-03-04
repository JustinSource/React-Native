import { StyleSheet, Text, View } from 'react-native';
import { ScaColors } from '../../constants/theme';

export default function ManagementScreen() {
    return (
        <View style={[styles.container, { backgroundColor: ScaColors.shop }]}>
            <Text style={styles.title}>Shop/CTV: Management</Text>
            <Text style={styles.subtitle}>Quản lý lô hàng và lịch sử bán hàng</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
});

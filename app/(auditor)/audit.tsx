import { StyleSheet, Text, View } from 'react-native';
import { ScaColors } from '../../constants/theme';

export default function AuditScreen() {
    return (
        <View style={[styles.container, { backgroundColor: ScaColors.auditor }]}>
            <Text style={styles.title}>Auditor: Audit Flow</Text>
            <Text style={styles.subtitle}>Quản lý lịch đánh giá và cấp chứng nhận số</Text>
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
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

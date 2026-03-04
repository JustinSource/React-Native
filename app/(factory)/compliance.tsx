import { StyleSheet, Text, View } from 'react-native';
import { ScaColors } from '../../constants/theme';

export default function ComplianceScreen() {
    return (
        <View style={[styles.container, { backgroundColor: ScaColors.factory }]}>
            <Text style={styles.title}>Factory: Compliance</Text>
            <Text style={styles.subtitle}>Hồ sơ năng lực và lộ trình chuyển đổi số</Text>
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

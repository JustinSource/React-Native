import { ScaColors } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function MoreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>More Screen (Coming Soon)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: ScaColors.primary,
        fontWeight: '600',
    },
});

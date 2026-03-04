import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, Facebook, Lock, Mail } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { ScaColors } from '../constants/theme';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        const lowerEmail = email.toLowerCase().trim();

        // Mock credentials check
        const isValidAdmin = lowerEmail === 'admin' && password === '123456';
        const isValidJustin = lowerEmail === 'justin' && password === '123456';

        if (isValidAdmin || isValidJustin) {
            setError('');
            // Mock login - proceed to home
            router.replace('/(tabs)' as any);
        } else {
            setError('Email hoặc mật khẩu không đúng');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Header Logo */}
                    <View style={styles.header}>
                        <View style={styles.logoContainer}>
                            <Image
                                source="https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4"
                                style={styles.logo}
                                contentFit="cover"
                            />
                        </View>
                        <Text style={styles.title}>Chào mừng trở lại!</Text>
                        <Text style={styles.subtitle}>Đăng nhập để tiếp tục hành trình bền vững</Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email / Username</Text>
                            <View style={styles.inputWrapper}>
                                <Mail size={20} color="#94A3B8" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="admin / justin"
                                    placeholderTextColor="#94A3B8"
                                    value={email}
                                    onChangeText={setEmail}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.labelRow}>
                                <Text style={styles.label}>Mật khẩu</Text>
                                <TouchableOpacity>
                                    <Text style={styles.forgotText}>Quên mật khẩu?</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Lock size={20} color="#94A3B8" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="••••••••"
                                    placeholderTextColor="#94A3B8"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
                                </TouchableOpacity>
                            </View>
                        </View>

                        {error ? <Text style={styles.errorText}>{error}</Text> : null}

                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginButtonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Divider */}
                    <View style={styles.dividerRow}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>Hoặc đăng nhập với</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Social Login */}
                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image
                                source="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                                style={styles.socialIcon}
                            />
                            <Text style={styles.socialButtonText}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Facebook size={24} color="#1877F2" />
                            <Text style={styles.socialButtonText}>Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Chưa có tài khoản? </Text>
                        <TouchableOpacity onPress={() => router.push('/register')}>
                            <Text style={styles.signUpText}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#4C6A43',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        overflow: 'hidden',
    },
    logo: {
        width: '80%',
        height: '80%',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#161C2D',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        textAlign: 'center',
    },
    form: {
        gap: 20,
        marginBottom: 32,
    },
    inputGroup: {
        gap: 8,
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E293B',
    },
    forgotText: {
        fontSize: 14,
        fontWeight: '600',
        color: ScaColors.primary,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 56,
        backgroundColor: '#F8FAFC',
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
    },
    loginButton: {
        backgroundColor: ScaColors.primary,
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: ScaColors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    errorText: {
        color: '#EF4444',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 32,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E2E8F0',
    },
    dividerText: {
        fontSize: 14,
        color: '#94A3B8',
    },
    socialRow: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 40,
    },
    socialButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 56,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
    },
    socialIcon: {
        width: 24,
        height: 24,
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 15,
        color: '#64748B',
    },
    signUpText: {
        fontSize: 15,
        fontWeight: '700',
        color: ScaColors.primary,
    },
});

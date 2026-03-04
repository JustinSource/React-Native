import { useRouter } from 'expo-router';
import { ArrowLeft, Check, Eye, EyeOff, Lock, Mail, User } from 'lucide-react-native';
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

export default function RegisterScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const handleRegister = () => {
        // Mock register - back to login
        router.replace('/login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <View style={styles.topHeader}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <ArrowLeft size={24} color="#1E293B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>SCA</Text>
                    <View style={{ width: 40 }} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.welcomeSection}>
                        <Text style={styles.title}>Tạo tài khoản mới</Text>
                        <Text style={styles.subtitle}>
                            Tham gia cộng đồng tiêu dùng bền vững ngay hôm nay
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Họ và tên</Text>
                            <View style={styles.inputWrapper}>
                                <User size={20} color="#94A3B8" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nguyễn Văn A"
                                    placeholderTextColor="#94A3B8"
                                    value={fullName}
                                    onChangeText={setFullName}
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputWrapper}>
                                <Mail size={20} color="#94A3B8" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="email@example.com"
                                    placeholderTextColor="#94A3B8"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Mật khẩu</Text>
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

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Xác nhận mật khẩu</Text>
                            <View style={styles.inputWrapper}>
                                <Lock size={20} color="#94A3B8" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="••••••••"
                                    placeholderTextColor="#94A3B8"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.termsRow}>
                            <TouchableOpacity
                                style={[styles.checkbox, agreed && styles.checkboxActive]}
                                onPress={() => setAgreed(!agreed)}
                            >
                                {agreed && <Check size={14} color="#FFF" />}
                            </TouchableOpacity>
                            <View style={styles.termsTextWrapper}>
                                <Text style={styles.termsText}>Tôi đồng ý với </Text>
                                <TouchableOpacity>
                                    <Text style={styles.linkText}>Điều khoản</Text>
                                </TouchableOpacity>
                                <Text style={styles.termsText}> & </Text>
                                <TouchableOpacity>
                                    <Text style={styles.linkText}>Chính sách bảo mật</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[styles.registerButton, !agreed && { opacity: 0.6 }]}
                            onPress={handleRegister}
                            disabled={!agreed}
                        >
                            <Text style={styles.registerButtonText}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dividerRow}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>Hoặc đăng ký với</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Reuse Social buttons from Login UI style */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Đã có tài khoản? </Text>
                        <TouchableOpacity onPress={() => router.push('/login')}>
                            <Text style={styles.loginText}>Đăng nhập</Text>
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
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 60,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: ScaColors.primary,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    welcomeSection: {
        alignItems: 'center',
        marginVertical: 32,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#161C2D',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B',
        textAlign: 'center',
        lineHeight: 24,
    },
    form: {
        gap: 20,
        marginBottom: 32,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E293B',
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
    termsRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        marginTop: 8,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#E2E8F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
    },
    checkboxActive: {
        backgroundColor: ScaColors.primary,
        borderColor: ScaColors.primary,
    },
    termsTextWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    termsText: {
        fontSize: 14,
        color: '#64748B',
    },
    linkText: {
        fontSize: 14,
        fontWeight: '700',
        color: ScaColors.primary,
    },
    registerButton: {
        backgroundColor: ScaColors.primary,
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    registerButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 15,
        color: '#64748B',
    },
    loginText: {
        fontSize: 15,
        fontWeight: '700',
        color: ScaColors.primary,
    },
});

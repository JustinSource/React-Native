import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
    ChevronRight,
    Leaf,
    QrCode,
    ShieldCheck,
    Zap
} from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScaColors } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const SLIDE_DATA = [
    {
        id: '1',
        title: 'Quét để xem nguồn gốc',
        description: 'Quét mã QR trên sản phẩm để xem toàn bộ hành trình từ nhà máy đến tay bạn',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1IrDKrmrANq8Vp5aMtlMJfzlAIfkz-hgr4WahsC5pvWDBh5crsvrXYZR0g0vA99HfMiFsHKcsaEiE1174coZP5UpJCjB7v9H51cHxl02KxezDs4-dDKH9eodhoYCITjOW8JjXl_9UFLCTBMy90TG2LGz7GNgtOEE11LFaCEKGsPLo4Pe3RSb-WPmI2tsjpZ9B0J43hfbAxk55-ljqqbvj_Du2rWvv1-dqFvQWMp41-Z0UhDlJ5i0wCZALjedUYwNeaCh_f405hQU',
        icon: QrCode
    },
    {
        id: '2',
        title: 'Chứng nhận bền vững',
        description: 'Kiểm tra chứng nhận GRS, GOTS, Fair Trade, và các tiêu chuẩn bền vững quốc tế',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0',
        icon: ShieldCheck
    },
    {
        id: '3',
        title: 'Tích điểm bảo vệ môi trường',
        description: 'Nhận điểm Impact và huy hiệu khi tham gia đánh giá sản phẩm bền vững',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS1ItcJXjqDHB3FgYF27Dvc2Jq0_Ug9XQtBL3pIUeKjQ5o5p6mSz5e65r1xckvuEZBaZinggmCexvuarU--RHAvWc0uSJzLM3-AeeinxTu6NNXxKWDzzHnEuJDoSWFrwSqz29ricOZ7z49Ll3ciU2lDnzlPGX2K1uiIAvgnBV7Yjk8nBiLzR4vZr7f1Jg-AEefc9481clBkR_S3tfas3YCKb8fkTIyoI28KRY_eu7uA4XVYAtxKE0KQyTAv9J-pocAs4KGchf7SXM',
        icon: Zap
    }
];

/**
 * Combined Screen: Timed Splash (5s) -> Onboarding Design
 */
export default function IntegratedLandingScreen() {
    const router = useRouter();
    const [viewState, setViewState] = useState<'splash' | 'landing' | 'slides'>('splash');
    const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    // App Flow Logic: Splash -> Check State -> (Onboarding or Auth or Home)
    useEffect(() => {
        // 5s Splash initially
        const splashTimer = setTimeout(() => {
            // After splash, check local storage (mocked for now)
            // In real app, use AsyncStorage.getItem('hasSeenOnboarding')
            const checkInitialState = async () => {
                // Mocking first time = true, auth = false
                const seenOnboarding = false; // Change to true to test skip onboarding
                const userToken = null;       // Change to 'token' to test bypass login

                setIsFirstTime(!seenOnboarding);
                setIsAuthenticated(!!userToken);

                if (!seenOnboarding) {
                    setViewState('landing');
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }).start();
                } else if (!userToken) {
                    router.replace('/login' as any);
                } else {
                    router.replace('/(tabs)' as any);
                }
            };

            checkInitialState();
        }, 5000);

        return () => clearTimeout(splashTimer);
    }, []);

    // Slides Auto-Rotation Timer (5s per slide)
    useEffect(() => {
        let interval: any;
        if (viewState === 'slides') {
            interval = setInterval(() => {
                const nextIndex = (currentSlideIndex + 1) % SLIDE_DATA.length;
                handleSlideChange(nextIndex);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [viewState, currentSlideIndex]);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };

    const handleSkip = () => {
        router.replace('/login' as any);
    };

    const startOnboarding = () => {
        setViewState('slides');
    };

    /**
     * UI 1: Splash Screen
     */
    if (viewState === 'splash') {
        return (
            <View style={[styles.splashContainer, { backgroundColor: ScaColors.primary }]}>
                <StatusBar style="light" />
                <SafeAreaView style={styles.splashSafeArea}>
                    <View style={styles.splashContent}>
                        <View style={styles.splashLogoBox}>
                            <Leaf color={ScaColors.primary} size={50} fill={ScaColors.primary} />
                        </View>
                        <Text style={styles.splashMainTitle}>Specifications</Text>
                        <Text style={styles.splashMainTitle}>Consumer App</Text>
                        <View style={styles.splashSubtitleContainer}>
                            <Text style={styles.splashSubtitle1}>Minh bạch từ Nhà máy đến Bạn</Text>
                            <Text style={styles.splashSubtitle2}>
                                Cùng chúng tôi kiến tạo tương lai bền vững qua từng sản phẩm.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.splashFooter}>
                        <Text style={styles.splashVersion}>v1.0.0 Beta</Text>
                    </View>
                </SafeAreaView>
            </View>
        );
    }

    /**
     * UI 2: Landing Page (Hero Design)
     */
    if (viewState === 'landing') {
        return (
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <SafeAreaView style={styles.container}>
                    <StatusBar style="dark" />
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <View style={styles.logoIcon}>
                                    <Leaf color="#fff" size={24} fill="#fff" />
                                </View>
                                <Text style={styles.logoText}>SCA</Text>
                            </View>
                        </View>

                        <View style={styles.heroContainer}>
                            <Image
                                source="https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4"
                                style={styles.heroImage}
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>

                        <View style={styles.featuresRow}>
                            <View style={styles.featureItem}>
                                <View style={styles.iconBox}>
                                    <QrCode color={ScaColors.primary} size={30} />
                                </View>
                                <Text style={styles.featureLabel}>Scan</Text>
                            </View>
                            <View style={styles.featureItem}>
                                <View style={styles.iconBox}>
                                    <ShieldCheck color={ScaColors.primary} size={30} />
                                </View>
                                <Text style={styles.featureLabel}>Verify</Text>
                            </View>
                            <View style={styles.featureItem}>
                                <View style={styles.iconBox}>
                                    <Zap color={ScaColors.primary} size={30} />
                                </View>
                                <Text style={styles.featureLabel}>Impact</Text>
                            </View>
                        </View>

                        <View style={styles.textSection}>
                            <Text style={styles.mainHeadline}>Biết nguồn gốc,{'\n'}Chọn bền vững</Text>
                            <Text style={styles.subText}>
                                Discover the journey of your products and make informed decisions for a better planet.
                            </Text>
                        </View>

                        <View style={styles.buttonSection}>
                            <TouchableOpacity style={styles.primaryButton} onPress={startOnboarding}>
                                <Text style={styles.primaryButtonText}>Get Started</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.secondaryButton} onPress={() => router.replace('/login' as any)}>
                                <Text style={styles.secondaryButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomDivider} />
                    </ScrollView>
                </SafeAreaView>
            </Animated.View>
        );
    }

    /**
     * UI 3: Interactive Carousel Slides
     */
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <SafeAreaView style={styles.container}>
                {/* Header with Skip */}
                <View style={styles.slideHeader}>
                    <View style={styles.headerLeft}>
                        <View style={styles.logoIcon}>
                            <Leaf color="#fff" size={20} fill="#fff" />
                        </View>
                        <Text style={styles.logoTextSmall}>SCA</Text>
                    </View>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.skipText}>Bỏ qua</Text>
                    </TouchableOpacity>
                </View>

                {/* Carousel Content */}
                <View style={styles.carouselContainer}>
                    <FlatList
                        ref={flatListRef}
                        data={SLIDE_DATA}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        onMomentumScrollEnd={(e) => {
                            const index = Math.round(e.nativeEvent.contentOffset.x / width);
                            setCurrentSlideIndex(index);
                        }}
                        renderItem={({ item }) => (
                            <View style={styles.slidePage}>
                                <View style={styles.slideImageContainer}>
                                    <Image
                                        source={item.image}
                                        style={styles.slideImage}
                                        contentFit="contain"
                                    />
                                </View>

                                {/* 3 Icons Navigation - Now positioned right under the image inside the slidePage for tighter layout */}
                                <View style={styles.iconNavRow}>
                                    {SLIDE_DATA.map((navItem, i) => {
                                        const Icon = navItem.icon;
                                        const isActive = currentSlideIndex === i;
                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                style={[styles.navIconBox, isActive && styles.activeNavIconBox]}
                                                onPress={() => handleSlideChange(i)}
                                            >
                                                <Icon color={isActive ? '#fff' : ScaColors.primary} size={24} />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>

                                <View style={styles.slideTextContainer}>
                                    <Text style={styles.slideTitle}>{item.title}</Text>
                                    <Text style={styles.slideDescription}>{item.description}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                {/* Footer Controls */}
                <View style={styles.slideFooter}>
                    <View style={styles.paginationRow}>
                        {SLIDE_DATA.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    currentSlideIndex === i ? styles.activeDot : styles.inactiveDot
                                ]}
                            />
                        ))}
                    </View>

                    <View style={styles.slideButtonSection}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={currentSlideIndex === SLIDE_DATA.length - 1 ? handleSkip : () => handleSlideChange(currentSlideIndex + 1)}
                        >
                            <Text style={styles.primaryButtonText}>
                                {currentSlideIndex === SLIDE_DATA.length - 1 ? 'Bắt đầu ngay' : 'Tiếp tục'}
                            </Text>
                            {currentSlideIndex < SLIDE_DATA.length - 1 && <ChevronRight color="#fff" size={20} style={{ marginLeft: 8 }} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    // Splash Styles
    splashContainer: {
        flex: 1,
    },
    splashSafeArea: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
    },
    splashContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 40,
    },
    splashLogoBox: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    splashMainTitle: {
        fontSize: 42,
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 48,
    },
    splashSubtitleContainer: {
        alignItems: 'center',
        marginTop: 40,
        gap: 15,
    },
    splashSubtitle1: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    splashSubtitle2: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        opacity: 0.9,
        lineHeight: 24,
    },
    splashFooter: {
        alignItems: 'center',
    },
    splashVersion: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.7,
    },

    // Common Onboarding
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 16,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoIcon: {
        backgroundColor: ScaColors.primary,
        width: 36,
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E3A8A',
    },
    logoTextSmall: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E3A8A',
    },

    // Landing Page Specific
    heroContainer: {
        marginHorizontal: 16,
        height: 320,
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: '#f1f5f9',
        marginBottom: 32,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 24,
        gap: 20,
        marginBottom: 32,
    },
    featureItem: {
        alignItems: 'center',
        gap: 8,
    },
    iconBox: {
        width: 60,
        height: 60,
        backgroundColor: '#E6F7F1',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    featureLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
    },
    textSection: {
        alignItems: 'center',
        paddingHorizontal: 32,
        marginBottom: 32,
    },
    mainHeadline: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1E3A8A',
        textAlign: 'center',
        lineHeight: 38,
    },
    subText: {
        fontSize: 15,
        color: '#64748B',
        textAlign: 'center',
        marginTop: 16,
        lineHeight: 22,
    },
    buttonSection: {
        paddingHorizontal: 24,
        gap: 12,
    },
    primaryButton: {
        backgroundColor: ScaColors.primary,
        height: 60,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: ScaColors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: '#F8FAFC',
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    secondaryButtonText: {
        color: '#1E3A8A',
        fontSize: 18,
        fontWeight: '600',
    },
    bottomDivider: {
        height: 8,
        backgroundColor: ScaColors.primary,
        width: '20%',
        borderRadius: 4,
        alignSelf: 'center',
        opacity: 0.1,
        marginTop: 40,
    },

    // Slide Mode Specific
    slideHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 10, // Let SafeAreaView handle the top inset, or adjust as needed
        paddingBottom: 10,
    },
    skipText: {
        fontSize: 16,
        color: '#64748B',
        fontWeight: '600',
    },
    carouselContainer: {
        height: height * 0.62, // Fixed height for carousel area
    },
    slidePage: {
        width: width,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    slideImageContainer: {
        width: 300,
        height: 300,
        backgroundColor: '#10B981',
        borderRadius: 150, // width / 2 for perfect circle
        overflow: 'hidden',
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Center the circle on the screen
    },
    slideImage: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    slideTextContainer: {
        alignItems: 'center',
        gap: 12,
        marginTop: 15,
    },
    slideTitle: {
        fontSize: 26,
        fontWeight: '800',
        color: '#161C2D',
        textAlign: 'center',
    },
    slideDescription: {
        fontSize: 15,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 10,
    },
    slideFooter: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: '20%',
    },
    paginationRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 25,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    activeDot: {
        backgroundColor: ScaColors.primary,
        width: 24,
    },
    inactiveDot: {
        backgroundColor: '#E2E8F0',
    },
    iconNavRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 10,
    },
    navIconBox: {
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    activeNavIconBox: {
        backgroundColor: ScaColors.primary,
        borderColor: ScaColors.primary,
    },
    slideButtonSection: {
        paddingHorizontal: 24,
    },
});

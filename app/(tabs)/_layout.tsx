import { Tabs } from 'expo-router';
import { Home, MoreHorizontal, QrCode, Search, User } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { ScaColors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ScaColors.primary,
        tabBarInactiveTintColor: '#94A3B8',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 95,
          paddingBottom: 15,
          paddingTop: 10,
          // marginBottom: 30,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F1F5F9',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Tìm kiếm',
          tabBarIcon: ({ color }) => <Search size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan_fab"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <View style={styles.fabContainer}>
              <QrCode size={32} color="#fff" />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            // Navigate to the actual scan screen
            (require('expo-router').router).push('/(consumer)/scan');
          },
        }}
      />
      <Tabs.Screen
        name="profile_tab"
        options={{
          title: 'Cá nhân',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="more_tab"
        options={{
          title: 'Thêm',
          tabBarIcon: ({ color }) => <MoreHorizontal size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    width: 60,
    height: 60,
    borderRadius: 28,
    backgroundColor: ScaColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    shadowColor: ScaColors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  }
});

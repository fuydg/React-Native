import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // 激活标签的文字颜色
        headerShown: false, // 隐藏页面头部
        tabBarButton: HapticTab, // 自定义震动反馈的标签按钮
        tabBarBackground: TabBarBackground, // 自定义标签栏背景
        tabBarStyle: Platform.select({
          ios: {
            // 在 iOS 上使用透明背景以显示模糊效果
            position: 'absolute',
          },
          default: {}, // 默认情况下保留其他平台的样式
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '主页',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, // 主页面的标签图标
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '探索',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />, // 探索页面的标签图标
        }}
      />
    </Tabs>
  );
}
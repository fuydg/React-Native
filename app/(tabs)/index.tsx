import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">欢迎!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">步骤 1：试一试</ThemedText>
        <ThemedText>
          编辑 <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> 以查看更改。
          按{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          打开开发者工具。
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">步骤 2：探索</ThemedText>
        <ThemedText>
          点击 Explore 标签，了解此启动应用程序中包含的更多内容。
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">步骤 3：重新开始</ThemedText>
        <ThemedText>
          准备好后，运行{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> 获取一个新的{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> 目录。这将把当前的{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> 移动到{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>。
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">探索</ThemedText>
      </ThemedView>
      <ThemedText>此应用包含示例代码，帮助你快速入门。</ThemedText>
      <Collapsible title="基于文件的路由">
        <ThemedText>
          此应用有两个页面:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> 和{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          文件设置了标签导航器。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="支持 Android、iOS 和 Web">
        <ThemedText>
          你可以在 Android、iOS 和 Web 上运行此项目。要打开 Web 版本，请在运行此项目的终端中按{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText>。
        </ThemedText>
      </Collapsible>
      <Collapsible title="图片">
        <ThemedText>
          对于静态图片，可以使用 <ThemedText type="defaultSemiBold">@2x</ThemedText> 和{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> 后缀来为不同屏幕密度提供文件。
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="自定义字体">
        <ThemedText>
          打开 <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> 查看如何加载{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>自定义字体</ThemedText>，比如这里的字体。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="亮暗模式组件">
        <ThemedText>
          此模板支持亮暗模式。通过{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> 钩子可以检测用户当前的配色方案，从而调整 UI 颜色。
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">了解更多</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="动画">
        <ThemedText>
          此模板包含动画组件示例。{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText>{' '}
          使用功能强大的 <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          库创建挥手动画。
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              提供了头部图片的视差效果。
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
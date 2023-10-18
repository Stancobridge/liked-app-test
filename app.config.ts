import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'liked-app',
  slug: 'liked-app',
  scheme: 'liked-app',
  version: '1.0.0',
  runtimeVersion: '1',
  orientation: 'portrait',
  web: {
    bundler: 'metro',
  },
  plugins: ['expo-router', '@react-native-firebase/app', 'expo-secure-store'],
  extra: {
    eas: {
      projectId: '09c5bc74-fb26-4d08-aae3-3daff9260676',
    },
  },
  android: {
    package: 'com.osmaxin.dating',
    googleServicesFile: './google-services.json',
  },
  ios: {
    bundleIdentifier: 'com.osmaxin.dating',
    googleServicesFile: './GoogleService-Info.plist',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
};

export default config;

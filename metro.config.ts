import { getDefaultConfig } from '@expo/metro-config';
const withNativewind = require('nativewind/metro');

const config = withNativewind(getDefaultConfig(__dirname));

module.exports = config;

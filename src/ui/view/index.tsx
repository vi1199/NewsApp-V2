import {
  SafeAreaView,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

export default function VView({children, ...args}: SafeAreaViewProps) {
  return <SafeAreaView {...args}>{children}</SafeAreaView>;
}

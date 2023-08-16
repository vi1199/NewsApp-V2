import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

export default function VSpinner({children, ...args}: ActivityIndicatorProps) {
  return <ActivityIndicator {...args}>{children}</ActivityIndicator>;
}

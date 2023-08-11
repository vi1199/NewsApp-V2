import {Text, TextProps, View, ViewProps} from 'react-native';

export default function VText({children, ...args}: TextProps) {
  return <Text {...args}>{children}</Text>;
}

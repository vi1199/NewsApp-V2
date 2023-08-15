import {
  Text,
  TextInput,
  TextInputAndroidProps,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from 'react-native';

export default function VInput({style, ...args}: TextInputProps) {
  return <TextInput style={[style]} {...args} />;
}

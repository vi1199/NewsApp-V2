import {VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {Image, StyleSheet} from 'react-native';

export const LauncherImage = () => {
  return (
    <VView style={styles.container}>
      <Image
        source={require('../../assets/googlePlay.webp')}
        resizeMode="center"
        style={{
          height: 82,
          width: 82,
        }}
      />
    </VView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Secondary['50'],
  },
});

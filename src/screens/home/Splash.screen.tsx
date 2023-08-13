import {VView} from '@src/ui';
import {Image} from 'react-native';

export const LauncherImage = () => {
  return (
    <VView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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

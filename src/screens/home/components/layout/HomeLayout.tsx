import {VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {StyleSheet} from 'react-native';
import {useGetEverythingQuery} from '../../actions';

export function Layout({children}: {children: JSX.Element | JSX.Element[]}) {
  return <VView style={styles.container}>{children}</VView>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Secondary['50'],
    flex: 1,
  },
});

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../nav/types';
import {routes} from '../../nav/screens';
import {Layout} from './components/layout/HomeLayout';
import {HomeScreenNavProps} from '@src/types/nav';
import {VSpinner, VText, VView} from '@src/ui';
import {useGetEverythingQuery} from './actions';
import {TopHeadlines} from './components/TopHeadlines';
import {LauncherImage} from './Splash.screen';

export const Home = ({route, navigation}: HomeScreenNavProps) => {
  const {
    data: topHeadlines,
    isLoading,
    isError,
    error,
  } = useGetEverythingQuery();
  if (isLoading) {
    return (
      <VView style={styles.spinner}>
        <VSpinner />
      </VView>
    );
  }

  return (
    <Layout>
      <TopHeadlines headlines={topHeadlines?.articles} />
    </Layout>
  );
};
export const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

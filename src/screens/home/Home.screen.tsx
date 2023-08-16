import {StyleSheet} from 'react-native';
import {Layout} from './components/layout/HomeLayout';
import {HomeScreenNavProps} from '@src/types/nav';
import {VSpinner, VText, VView} from '@src/ui';
import {useGetEverythingQuery} from './actions';
import {TopHeadlines} from './components/TopHeadlines';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '@src/ui/colors';
import {getData, storeData} from '@src/atoms/storage';
import {TOP_HEADLINES} from '@src/atoms/constants';
import {useEffect, useRef, useState} from 'react';
import {INewsContents} from '@src/types/news';
import {HeadlineTimer} from './components/HeadlineTimer';

export const Home = ({route, navigation}: HomeScreenNavProps) => {
  const {data: topHeadlines, isLoading} = useGetEverythingQuery('args');
  const [headlines, setHeadlines] = useState(Array<INewsContents>);

  const readData = async () => {
    try {
      const value = await getData(TOP_HEADLINES);
      if (value !== null) {
        setHeadlines(value.slice(0, 10));
      }
    } catch (e) {
      console.warn('error in async', e);
    }
  };

  useEffect(() => {
    if (topHeadlines) {
      storeData(TOP_HEADLINES, topHeadlines?.articles);
    }
  }, [topHeadlines]);

  useEffect(() => {
    if (topHeadlines) {
      readData();
    }
  }, [topHeadlines]);

  if (isLoading) {
    return (
      <VView style={styles.spinner}>
        <VSpinner />
      </VView>
    );
  }

  const setStateHeadlines = (random: string | any[]) => {
    setHeadlines(prevVal => [...random.slice(0, 5), ...prevVal]);
  };

  const removeItem = (item: {title: string | undefined}) => {
    setHeadlines(items => items.filter(row => row?.title !== item?.title));
  };

  return (
    <Layout>
      <HeadlineTimer setHeadlines={setStateHeadlines} />
      <TopHeadlines headlines={headlines} removeRow={removeItem} />
    </Layout>
  );
};
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Secondary['400'],
    margin: 20,
    padding: 10,
  },
  randomCTA: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 4,
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.Secondary['50'],
  },
});

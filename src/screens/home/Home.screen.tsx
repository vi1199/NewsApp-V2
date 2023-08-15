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

export const Home = ({route, navigation}: HomeScreenNavProps) => {
  const {data: topHeadlines, isLoading} = useGetEverythingQuery();
  const [headlines, setHeadlines] = useState([]);

  const [time, setTime] = useState(0);
  const counter = useRef(0);

  useEffect(() => {
    if (counter.current < 10) {
      counter.current += 1;
      //   const timer = setTimeout(() => setTime(prevVal => prevVal + 1), 1000);
      //   return () => clearTimeout(timer);
    } else {
      setTime(0);
      counter.current = 0;
      // generateRandomNews();
    }
  }, [time]);

  useEffect(() => {
    if (topHeadlines) {
      console.count('--effect---');
      storeData(TOP_HEADLINES, topHeadlines?.articles);
    }
  }, [topHeadlines]);

  const readData = async () => {
    try {
      const value = await getData(TOP_HEADLINES);

      if (value !== null) {
        setHeadlines(value.slice(0, 10));
      }
    } catch (e) {
      console.log('--error--', e);
    }
  };

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

  const generateRandomNews = async () => {
    setTime(0);
    counter.current = 0;
    try {
      const value = await getData(TOP_HEADLINES);
      if (value !== null) {
        const random = value.sort(function () {
          return 0.5 - Math.random();
        });
        setHeadlines(prevVal => [...random.slice(0, 5), ...prevVal]);
      }
    } catch (e) {
      console.log('--error--', e);
    }
  };

  const removeItem = item => {
    setHeadlines(items => items.filter(row => row?.title !== item?.title));
  };

  return (
    <Layout>
      <VView
        style={{
          backgroundColor: Colors.Secondary['400'],
          margin: 20,
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={generateRandomNews}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 4,
          }}>
          <VText style={{color: Colors.Primary['50']}}>Random Headlines</VText>
        </TouchableOpacity>
      </VView>
      <VView
        style={{
          alignSelf: 'center',
        }}>
        <VText>{time}</VText>
      </VView>

      <TopHeadlines headlines={headlines} removeRow={removeItem} />
    </Layout>
  );
};
export const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.Secondary['50'],
  },
});

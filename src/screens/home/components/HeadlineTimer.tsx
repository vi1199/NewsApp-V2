import {TOP_HEADLINES} from '@src/atoms/constants';
import {getData} from '@src/atoms/storage';
import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const HeadlineTimer = props => {
  const {setHeadlines} = props;
  const [time, setTime] = useState(0);

  const counter = useRef(0);
  useEffect(() => {
    if (counter.current < 10) {
      counter.current += 1;
      const timer = setTimeout(() => setTime(prevVal => prevVal + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTime(0);
      counter.current = 0;
      generateRandomNews();
    }
  }, [time]);

  const generateRandomNews = async () => {
    setTime(0);
    counter.current = 0;
    try {
      const value = await getData(TOP_HEADLINES);
      if (value !== null) {
        const random = value.sort(function () {
          return 0.5 - Math.random();
        });
        setHeadlines(random);
      }
    } catch (e) {
      console.warn('error in async', e);
    }
  };

  return (
    <VView style={styles.container}>
      <TouchableOpacity onPress={generateRandomNews} style={styles.randomCTA}>
        <VText style={{color: Colors.Primary['50']}}>Random Headlines</VText>
      </TouchableOpacity>
      <VText style={{alignSelf: 'center'}}>{time}</VText>
    </VView>
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
});

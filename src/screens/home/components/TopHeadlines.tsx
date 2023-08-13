import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppleStyleSwipeableRow from './swipable';
import {RectButton} from 'react-native-gesture-handler';

export const TopHeadlines = props => {
  const {headlines} = props;
  console.log('--headines--', headlines);

  const RenderHeadLines = ({item}) => {
    const {title} = item;
    return (
      <RectButton style={{paddingVertical: 10, height: 80}}>
        <VText style={{fontSize: 12}}>{title}</VText>
      </RectButton>
    );
  };
  const itemSeparator = () => {
    return (
      <VView style={{height: 1, backgroundColor: Colors.TertiaryBlue['400']}} />
    );
  };
  const SwipeableRow = ({item, index}) => {
    return (
      <AppleStyleSwipeableRow>
        <RenderHeadLines item={item} />
      </AppleStyleSwipeableRow>
    );
  };
  return (
    <VView style={{marginHorizontal: 12}}>
      <FlatList
        data={headlines}
        renderItem={SwipeableRow}
        ItemSeparatorComponent={itemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </VView>
  );
};

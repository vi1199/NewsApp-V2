import {VText, VView} from '@src/ui';
import {Colors} from '@src/ui/colors';
import {FlatList} from 'react-native';
import AppleStyleSwipeableRow from './swipable';
import {RectButton} from 'react-native-gesture-handler';
import {useAppSelector} from '@src/redux/store.hooks';
import isEmpty from 'lodash/isEmpty';

export const TopHeadlines = props => {
  const {headlines, removeRow} = props;
  const pinnedItems = useAppSelector(state => state.appSlice.pinnedItems);
  console.log('--headines--\n', headlines);

  const RenderHeadLines = ({item, color}) => {
    const {title} = item;
    return (
      <RectButton
        style={{
          paddingVertical: 10,
          height: 80,
          backgroundColor: color ? color : 'white',
          paddingHorizontal: 12,
        }}>
        <VText style={{fontSize: 12}}>{title}</VText>
      </RectButton>
    );
  };
  const itemSeparator = () => {
    return (
      <VView style={{height: 2, backgroundColor: Colors.Secondary['50']}} />
    );
  };
  const SwipeableRow = ({item, index}) => {
    return (
      <AppleStyleSwipeableRow deleteRow={removeRow}>
        <RenderHeadLines item={item} />
      </AppleStyleSwipeableRow>
    );
  };
  const renderPinnedItems = () => {
    if (!isEmpty(pinnedItems)) {
      return (
        <VView>
          <RenderHeadLines
            item={pinnedItems}
            color={Colors.TertiaryBlue['300']}
          />
        </VView>
      );
    }
    return null;
  };

  return (
    <VView style={{}}>
      {renderPinnedItems()}
      <FlatList
        data={headlines}
        renderItem={SwipeableRow}
        ItemSeparatorComponent={itemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </VView>
  );
};

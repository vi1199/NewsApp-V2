import {addPinnedItems} from '@src/reducers/app.slice';
import {useAppDispatch} from '@src/redux/store.hooks';
import {Colors} from '@src/ui/colors';
import React, {Component, useRef} from 'react';
import {Animated, StyleSheet, Text, View, I18nManager} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
const AnimatedView = Animated.createAnimatedComponent(View);

export default function AppleStyleSwipeableRow({children, deleteRow}) {
  const swipeRef = useRef(null);
  const dispatch = useAppDispatch();
  const renderLeftActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const close = () => {
      dispatch(addPinnedItems(children.props.item));
      swipeRef?.current?.close();
    };
    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{scale}],
            },
          ]}>
          Pin To Top
        </Animated.Text>
      </RectButton>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    const pressHandler = () => {
      console.log('--logged--');
      swipeRef?.current?.close();
      deleteRow(children.props.item);
    };
    return (
      <RectButton style={[styles.rightAction]} onPress={pressHandler}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{scale}],
            },
          ]}>
          Delete
        </Animated.Text>
      </RectButton>
    );
  };

  const close = () => {};

  return (
    <Swipeable
      key={children.props.item.title}
      friction={2}
      ref={swipeRef}
      enableTrackpadTwoFingerGesture
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  leftAction: {
    backgroundColor: Colors.Warning['200'],
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    backgroundColor: 'plum',
    height: 20,
  },
  rightAction: {
    alignItems: 'center',
    backgroundColor: Colors.Warning['200'],
    justifyContent: 'center',
  },
});

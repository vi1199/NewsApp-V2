import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './nav';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import {LauncherImage} from './screens/home/Splash.screen';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Suspense fallback={LauncherImage()}>
            <AppNavigator />
          </Suspense>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};
export default App;

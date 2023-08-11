import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Home} from '../screens/home/Home.screen';
import {routes} from './screens';
import {RootStackParamList} from './types';

const navOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
export const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name={routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return <HomeNavigator />;
};

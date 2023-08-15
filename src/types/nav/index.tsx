import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {routes} from '@src/nav/screens';
import {RootStackParamList} from '@src/nav/types';

export type HomeScreenNavProps = NativeStackScreenProps<
  RootStackParamList,
  routes.HOME
>;

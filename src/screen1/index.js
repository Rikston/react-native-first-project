import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {
 BATMAN_HOME,
 BATMAN_DETAILS
} from '../routes';

const stack = createStackNavigator({
      [BATMAN_HOME]: { screen: HomeScreen },
      [BATMAN_DETAILS]: { screen: DetailsScreen }
},
{
   headerMode: 'none'
});
export default createAppContainer(stack);

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {
 STARGATE_HOME,
 STARGATE_DETAILS
} from '../routes';

const stack = createStackNavigator({
      [STARGATE_HOME]: { screen: HomeScreen },
      [STARGATE_DETAILS]: { screen: DetailsScreen }
},
{
   headerMode: 'none'
});
export default createAppContainer(stack);

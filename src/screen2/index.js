import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import HomeStarGate from '../screen';
import DetailsScreen from './DetailsScreen';
import {
 SPIDER_HOME,
 SPIDER_DETAILS,
 STARGATE_HOME
} from '../routes';

const stack = createStackNavigator({
      [SPIDER_HOME]: { screen: HomeScreen },
      [SPIDER_DETAILS]: { screen: DetailsScreen },
      [STARGATE_HOME]: { screen: HomeStarGate}
},
{
   headerMode: 'none'
});
export default createAppContainer(stack);

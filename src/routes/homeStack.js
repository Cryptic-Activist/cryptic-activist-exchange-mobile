import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation' 

import Home from '../screens/Home'
import ReviewDetail from '../screens/ReviewDetail'

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetail: {
    screen: ReviewDetail,
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '@/screens/home-screen';
import FeedScreen from '@/screens/feed-screen';
import CalendarScreen from '@/screens/calendar-screen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;

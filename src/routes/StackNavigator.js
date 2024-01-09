import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './navigationConfig';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
        animationDuration: 100,
        // fast aimation
      }}
      initialRouteName="WebViewComponents">
      {routes.map(
        item =>
          item?.navigationType === 'stack' && (
            <Stack.Screen
              key={item.id}
              name={item.name}
              component={item.component}
            />
          ),
      )}
    </Stack.Navigator>
  );
}

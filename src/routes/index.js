import {TouchableWithoutFeedback, Keyboard, StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function RootNavigation() {
  return (
    <PaperProvider>
      <DismissKeyboard>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#5846BE"
            translucent={false}
          />
          <StackNavigator />
        </NavigationContainer>
      </DismissKeyboard>
    </PaperProvider>
  );
}

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStack} from "./assets/types/RootStack";

import {HomePage} from "./routes/HomePage";
import {ToDo} from "./routes/ToDo";

const Stack = createNativeStackNavigator<RootStack>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false}} />
        <Stack.Screen name="ToDo" component={ToDo} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


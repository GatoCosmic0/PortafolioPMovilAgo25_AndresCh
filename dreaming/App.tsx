import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Post from './screens/Post';

const Stack = createStackNavigator(); // Stack initialize

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#842A3B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "🌺 Lista de Posts",
            headerLeft: () => null,
            gestureEnabled: false
          }}
        />

        <Stack.Screen
          name="Post"
          component={Post}
          options={{ title: "📖 Detalles del Post" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Basico from "./screens/Basico";
import Avanzado from "./screens/Avanzado";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined}>
                <Stack.Screen name="Inicio" component={Home}/>
                <Stack.Screen name="Basico" component={Basico}/>
                <Stack.Screen name="Avanzado" component={Avanzado}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
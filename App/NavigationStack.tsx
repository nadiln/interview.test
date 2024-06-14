import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculatorScreen from "./Screens/CalculatorScreen";
import HomeScreen from "./Screens/HomeScreen";
import ChallengeTwoScreen from "./Screens/ChallengeTwo";
import DrawerNavigationStack from "./DrawerNavigationStack";
import ChallengeThreeScreen from "./Screens/ChallengeThreeScreen";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  CalculatorScreen: undefined;
  ChallengeTwoScreen: undefined;
  ChallengeThreeScreen: undefined;
};

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
      <Stack.Screen name="ChallengeTwoScreen" component={DrawerNavigationStack} />
      <Stack.Screen name="ChallengeThreeScreen" component={ChallengeThreeScreen} />
    </Stack.Navigator>
  );
}

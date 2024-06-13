import { Text, View } from "react-native";
import ScreenSurface from "../../Components/Atoms/ScreenSurface";
import TopHeaderBar from "../../Components/Atoms/TopHeaderBar";
import ActionItemsBox from "../../Components/Molecules/ActionItemsBox";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../NavigationStack";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
};
export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { navigateToScreen, goBackFunc } = useHomeScreen(navigation);
  return (
    <ScreenSurface>
      <TopHeaderBar title="Home" />
      <View>
        <ActionItemsBox onNavigateToScreen={navigateToScreen} />
      </View>
    </ScreenSurface>
  );
}

type UseHomeScreenProps = HomeScreenProps["navigation"];

function useHomeScreen(navigation: UseHomeScreenProps) {
  const navigateToScreen = () => {
    console.log("navigate to the screen");
    navigation.navigate("CalculatorScreen");
  };

  const goBackFunc = () => {
    navigation.goBack();
  };

  return {
    navigateToScreen,
    goBackFunc,
  };
}

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
  const navigateToScreen = (challenge: string) => {
    console.log("navigate to the screen", challenge);

    if (challenge === "CH1") {
      navigation.navigate("CalculatorScreen");
      return;
    }
    if (challenge === "CH2") {
      navigation.navigate("ChallengeTwoScreen");
      return;
    }
    if (challenge === "CH3") {
      navigation.navigate("ChallengeThreeScreen");
      return;
    }
  };

  const goBackFunc = () => {
    navigation.goBack();
  };

  return {
    navigateToScreen,
    goBackFunc,
  };
}

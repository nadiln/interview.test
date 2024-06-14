import { View, Text, TouchableOpacity } from "react-native";
import RemixIcon from "react-native-remix-icon";

type ActionItemBoxProps = {
  onNavigateToScreen: (challenge: string) => void;
};

export default function ActionItemsBox({ onNavigateToScreen }: ActionItemBoxProps) {
  return (
    <View className="bg-[#6A1B9A] bg-opacity-90 px-4">
      <View className="flex-row items-center">
        <RemixIcon name={"apps-line"} color="#FFFFFF" size={20} />
        <Text className="px-5 py-3 text-2xl font-bold text-white ">What you can perform</Text>
      </View>

      <TouchableOpacity onPress={() => onNavigateToScreen("CH1")}>
        <View className="flex-row items-center">
          <RemixIcon name={"calculator-fill"} color="#FFFFFF" size={20} />
          <Text className="px-5 py-3 text-lg font-bold text-white ">Add Two Numbers</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigateToScreen("CH2")}>
        <View className="flex-row items-center">
          <RemixIcon name={"menu-line"} color="#FFFFFF" size={20} />
          <Text className="px-5 py-3 text-lg font-bold text-white ">Challenge Two</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigateToScreen("CH3")}>
        <View className="flex-row items-center">
          <RemixIcon name={"numbers-line"} color="#FFFFFF" size={20} />
          <Text className="px-5 py-3 text-lg font-bold text-white ">Challenge Three</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

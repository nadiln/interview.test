import { Text, TouchableOpacity, View } from "react-native";
import RemixIcon from "react-native-remix-icon";

type TopHeaderBarProps = {
  title: string;
  goBackFunc?: () => void;
};

export default function TopHeaderBar({ title, goBackFunc }: TopHeaderBarProps) {
  return (
    <View className="flex-row items-center mt-4 mb-6">
      {goBackFunc ? (
        <TouchableOpacity onPress={goBackFunc}>
          <RemixIcon name={"arrow-left-line"} color="#FFFFFF" size={20} />
        </TouchableOpacity>
      ) : null}
      <Text className="ml-10 text-lg font-bold text-white">{title}</Text>
    </View>
  );
}

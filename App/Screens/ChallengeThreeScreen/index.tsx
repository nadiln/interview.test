import { Button, TextInput, View } from "react-native";
import ScreenSurface from "../../Components/Atoms/ScreenSurface";
import { Text } from "react-native";
import TopHeaderBar from "../../Components/Atoms/TopHeaderBar";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../NavigationStack";
import { useState } from "react";

type ChallengeThreeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "ChallengeThreeScreen">;
};

export default function ChallengeThreeScreen({ navigation }: ChallengeThreeScreenProps) {
  const { goBackFunc, setNumberArray, calculate, setTargetNumber, output, errorMsg } =
    useChallengeThreeScreen(navigation);
  return (
    <ScreenSurface>
      <TopHeaderBar title="Add 2 Numbers" goBackFunc={goBackFunc} />
      <View className="bg-[#f7f2f2]  bg-opacity-90 px-4 py-10">
        <Text className="text-2xl font-bold text-center">Challenge Three</Text>
        <View className="mt-4">
          <TextInput
            onChangeText={(text) => {
              setNumberArray(text);
            }}
            className="mt-4 bg-white border h-11"
            placeholder="Enter numbers ex: 4, 11, 17, 25"
          />
          <TextInput
            onChangeText={(text) => setTargetNumber(text)}
            className="mt-3 mb-4 bg-white border h-11"
            placeholder="Enter Target"
          />
          <Text className="my-4 font-bold text-red-500">{errorMsg}</Text>
          <Button
            onPress={() => {
              calculate();
            }}
            title="Calculate"
          />
          <Text className="mt-5 text-2xl font-bold"> Output : {output}</Text>
        </View>
      </View>
    </ScreenSurface>
  );
}

type UseChallengeThreeScreenProps = ChallengeThreeScreenProps["navigation"];
function useChallengeThreeScreen(navigation: UseChallengeThreeScreenProps) {
  const goBackFunc = () => {
    navigation.goBack();
  };

  const [numberArray, setNumberArray] = useState("");
  const [targetNumber, setTargetNumber] = useState("");
  const [output, setOutput] = useState<number[] | []>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const calculate = () => {
    if (!numberArray && !targetNumber) {
      setErrorMsg("Please enter valid inputs");
    }
    console.log("target array ---", numberArray);
    const numberArrayAsNumbers = numberArray.split(",").map(Number);

    const result = twoSum(numberArrayAsNumbers, targetNumber as unknown as number);
    setOutput(result);
    console.log("result --", result);
  };

  const twoSum = (numbers: number[], target: number): [number, number] | [] => {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum == target) {
        return [left + 1, right + 1];
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  };

  return {
    goBackFunc,
    numberArray,
    setNumberArray,
    calculate,
    setTargetNumber,
    output,
    errorMsg,
  };
}

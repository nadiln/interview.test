import { View, Text, TextInput, Button } from "react-native";
import ScreenSurface from "../../Components/Atoms/ScreenSurface";
import TopHeaderBar from "../../Components/Atoms/TopHeaderBar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../NavigationStack";
import { Controller, useForm } from "react-hook-form";
import { number, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

type CalculatorScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "CalculatorScreen">;
};

type FormData = {
  firstNumber: string;
  secondNumber: string;
};

export default function CalculatorScreen({ navigation }: CalculatorScreenProps) {
  const { goBackFunc, control, errors, onSubmit, total } = useCalculatorScreen(navigation);
  return (
    <ScreenSurface>
      <TopHeaderBar title="Add 2 Numbers" goBackFunc={goBackFunc} />
      <View className="bg-[#e3e3e3]  bg-opacity-90 px-4 py-10">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="py-2 text-lg font-bold border-2 border-white"
              placeholder="Enter first number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as unknown as string}
            />
          )}
          name="firstNumber"
        />
        {errors.firstNumber && <Text>Enter a valid number.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="py-2 mt-5 text-lg font-bold border-2 border-white"
              placeholder="Enter second number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as unknown as string}
            />
          )}
          name="secondNumber"
        />
        {errors.secondNumber && <Text>Enter a valid number.</Text>}

        <View className="mt-5">
          <Button title="Add Two Numbers" onPress={onSubmit} />
        </View>
        <View className="mt-5">
          <Text className="text-2xl font-bold">Total: {total}</Text>
        </View>
      </View>
    </ScreenSurface>
  );
}

type UseCalculatorScreenProps = CalculatorScreenProps["navigation"];

function useCalculatorScreen(navigation: UseCalculatorScreenProps) {
  const [total, setTotal] = useState<undefined | number>(undefined);

  const goBackFunc = () => {
    navigation.goBack();
  };

  const formSchema = object({
    firstNumber: number().required(),
    secondNumber: number().required(),
  });

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    values: {
      firstNumber: null as unknown as number,
      secondNumber: null as unknown as number,
    },
    mode: "all",
    resolver: yupResolver(formSchema),
  });
  const onSubmit = handleSubmit((data) => {
    setTotal(Number(data.firstNumber) + Number(data.secondNumber));
    reset({ firstNumber: "" as unknown as number, secondNumber: "" as unknown as number });
  });

  return {
    goBackFunc,
    control,
    errors,
    onSubmit,
    total,
  };
}

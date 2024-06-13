import { ImageBackground, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenSurfaceProps = React.PropsWithChildren<{}>;

export default function ScreenSurface({ children }: ScreenSurfaceProps) {
  const { insets } = useScreenSurface();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
      className="flex-1 px-2 mt-4 ">
      <ImageBackground className="flex-1 " source={require("./bg.jpg")} style={{ flex: 1 }}>
        <View className="px-4 ">{children}</View>
      </ImageBackground>
    </View>
  );
}

function useScreenSurface() {
  const insets = useSafeAreaInsets();
  return {
    insets,
  };
}

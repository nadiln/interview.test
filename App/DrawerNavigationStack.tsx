import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import ChallengeTwoScreen from "./Screens/ChallengeTwo";
import { Button, TextInput, View } from "react-native";
import RemixIcon from "react-native-remix-icon";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

function CustomSearch(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <View className="flex-row items-center justify-center flex-1">
        <TextInput
          className="flex-1 h-10 px-3 py-3 bg-white"
          //   style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Search"
        />
        <View>
          <View className="flex-row pr-3">
            <TouchableOpacity>
              <RemixIcon name={"search-line"} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              className="pl-3"
              onPress={() => {
                props.navigation.closeDrawer();
              }}>
              <RemixIcon name={"menu-line"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigationStack() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSearch {...props} />}>
      <Drawer.Screen name="ScreenOne" component={ChallengeTwoScreen} />
      <Drawer.Screen name="ScreenTwo" component={ChallengeTwoScreen} />
      <Drawer.Screen name="ScreenThree" component={ChallengeTwoScreen} />
    </Drawer.Navigator>
  );
}

import { ActionIcon, Button } from "@components/component-ui";

import { ToastAndroid } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const showToast = () => {
    ToastAndroid.show("A dom appeared nearby !", ToastAndroid.TOP);
  };

  return (
    <View className="flex h-full items-center justify-center">
      <Text className="text-xl font-bold ">Tab One</Text>
      <Button onPress={showToast}>Hello</Button>
      <ActionIcon icon={<Text>ho</Text>} />
      <View className="my-10 h-4 w-32" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

import { TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function NotFoundScreen({ navigation }: RootStackScreenProps<"NotFound">) {
  return (
    <View className="flex h-full items-center justify-center">
      <Text className="font-bold text-lg">This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace("Root")} className="mt-10 py-10 ">
        <Text className="text-md text-[#2e78b7]">Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

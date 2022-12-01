import { Text, TouchableOpacity } from "react-native";
import { ActionIconProps } from "./action-icon-types";

const ActionIcon = (props: ActionIconProps) => {
  const { label, icon, onPress, active = false } = props;

  return (
    <TouchableOpacity
      className={`flex items-center space-x-2 rounded-full p-2 outline-none ring-primary focus:ring-1 ${
        active ? "bg-primary-100 " : "hover:bg-light-grey/50"
      }`}
      onPress={onPress}
    >
      {label !== undefined && (
        <Text className={`text-xs font-semibold ${active ? "text-primary-700" : "text-dark-grey"}`}>{label}</Text>
      )}
      <Text className={active ? "text-primary-700" : " text-dark-grey"}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default ActionIcon;

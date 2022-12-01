import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type ActionIconProps = {
  label?: React.ReactNode;
  icon: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  type?: "submit" | "button" | "reset";
  active?: boolean;
};

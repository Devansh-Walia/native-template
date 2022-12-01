import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onPress?: (event: GestureResponderEvent) => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  loading?: boolean /** Indicate loading state */;
  icon?: React.ReactNode /** Adds icon before button label  */;
  variant?: "primary" | "secondary" | "tertiary" | "outline" /** Adds style variations  */;
  fullWidth?: boolean /** Sets button width to 100% of parent element */;
  small?: boolean /** Change to a smaller button*/;
}

import { Text } from "@components/Themed";
import { useCallback } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import { ButtonProps } from "./button-types";

const Button = (props: ButtonProps) => {
  const {
    children,
    onPress,
    className = "",
    disabled,
    loading,
    icon,
    fullWidth = false,
    small = false,
    variant = "primary",
  } = props;

  const getStyle = useCallback(() => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white ring-primary-300";
      case "secondary":
        return "text-primary-900 bg-primary-200 ring-primary";
      case "tertiary":
        return "text-primary-900 ";
      case "outline":
        return "text-primary ring-1 ring-primary";
    }
  }, [variant]);

  return (
    <TouchableOpacity
      className={`inline-block   rounded  items-center justify-center  text-center font-medium outline-none transition-all ${
        small ? "px-4 py-2 text-sm" : "py-3 px-6"
      } ${getStyle()} ${fullWidth ? "block w-full" : "w-max"} ${loading || icon ? "flex space-x-3" : ""} ${
        loading || disabled ? "bg-opacity-30" : "hover:-translate-y-0.5 hover:bg-opacity-90 focus:ring-2"
      } ${className}`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text>
          {!loading && icon && icon}
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

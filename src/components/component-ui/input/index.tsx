import { isEmpty } from "lodash";
import { FC, useState } from "react";
import { Text, TextInput, View } from "react-native";

import ActionIcon from "../action-icon";
import { InputProps } from "./input-types";

// TODO: make this work

const Input: FC<InputProps> = (props) => {
  const { label, type, placeholder, error, required = false } = props;

  const [viewPassword, setViewPassword] = useState(false);

  return (
    <View className="relative w-full space-y-1.5">
      {!isEmpty(label) && (
        <Text className="text-sm capitalize text-dark-grey">
          {label}
          {required && <span className="text-red-500">*</span>}
        </Text>
      )}

      <TextInput
        placeholder={placeholder}
        className={` block w-full rounded-lg py-3 pl-6 text-black placeholder-light-grey outline-none ring-1 ring-light-grey focus:ring-primary ${
          type === "password" ? "pr-10" : "pr-6"
        }`}
      />

      {type === "password" && (
        <View className="absolute right-1 top-8">
          <ActionIcon
            icon={viewPassword ? <Text>EyeSlash</Text> : <Text>Eye</Text>}
            onPress={() => setViewPassword((pre) => !pre)}
          />
        </View>
      )}

      {error && <Text className="ml-1 text-xs text-red-500">{error.message}</Text>}
    </View>
  );
};

export default Input;

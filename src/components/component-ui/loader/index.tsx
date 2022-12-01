import { FC } from "react";
import { ActivityIndicator } from "react-native";

interface LoaderProps {
  className?: string;
  size?: number;
  color?: string;
}

const Loader: FC<LoaderProps> = (props) => {
  const { className, color, size } = props;

  return <ActivityIndicator color={color} size={size} className={className} />;
};

export default Loader;

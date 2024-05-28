import React from "react";
import { Text, TextProps } from "@mantine/core";

interface HomeMainTextProps extends TextProps {
  children: React.ReactNode;
}

const HomeMainText: React.FC<HomeMainTextProps> = ({ children, ...props }) => {
  return (
    <Text size="xl" {...props}>
      {children}
    </Text>
  );
};

export default HomeMainText;

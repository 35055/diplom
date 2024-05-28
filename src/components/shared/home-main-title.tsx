import React from "react";
import { Title, TitleProps } from "@mantine/core";

interface HomeMainTextProps extends Omit<TitleProps, "children"> {
  children: React.ReactNode;
}

const HomeMainText: React.FC<HomeMainTextProps> = ({ children, ...props }) => {
  return <Title mt="xl" mb="xl" {...props}>{children}</Title>;
};

export default HomeMainText;

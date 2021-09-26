import React, { FC } from "react";
import { HStack, Image, Stack, StackProps, Text } from "@chakra-ui/react";

type Props = {
  iconImg: "/calendar.svg" | "/location.svg";
  title: string | undefined;
  description: string | undefined;
} & StackProps;

const InfoSection: FC<Props> = ({
  iconImg,
  title,
  description,
  ...stackProps
}) => {
  return (
    <HStack align="flex-start" spacing="12px" {...stackProps}>
      <Image w="16px" h="20px" src={iconImg} />

      <Stack spacing="4px">
        <Text children={title} />
        <Text opacity={0.6} children={description} />
      </Stack>
    </HStack>
  );
};

export default InfoSection;

import React, { FC } from "react";
import { Tag, TagProps } from "@chakra-ui/react";

const DisciplineTag: FC<TagProps> = tagProps => {
  return (
    <Tag
      borderRadius="12px"
      px="12px"
      py="4px"
      bg="none"
      color="inherit"
      border="1px"
      {...tagProps}
    />
  );
};

export default DisciplineTag;

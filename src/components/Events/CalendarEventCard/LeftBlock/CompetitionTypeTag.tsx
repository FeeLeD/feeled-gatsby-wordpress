import React, { FC } from "react";
import { Tag, TagProps } from "@chakra-ui/react";

const CompetitionTypeTag: FC<TagProps> = tagProps => {
  return (
    <Tag
      w="fit-content"
      px="12px"
      py="4px"
      borderColor="rgb(0,0,0,0.1)"
      color="rgb(0,0,0,0.5)"
      border="1px"
      borderRadius="12px"
      bg="none"
      fontSize="sm"
      {...tagProps}
    />
  );
};

export default CompetitionTypeTag;

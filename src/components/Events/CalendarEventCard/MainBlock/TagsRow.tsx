import React, { FC } from "react";
import { NormalizedEvent_Disciplines } from "../../types";
import { HStack, Text } from "@chakra-ui/react";
import DisciplineTag from "./DisciplineTag";

type Props = {
  type: "women" | "men";
  tags: string[] | undefined;
};

const ROW_TITLE = {
  men: "Мужчины",
  women: "Женщины",
};

const ROW_COLOR = {
  men: "#5C89CA",
  women: "#DD7BAD",
};

const TagsRow: FC<Props> = ({ type, tags }) => {
  return (
    <HStack color={ROW_COLOR[type]}>
      <Text fontSize="md" w="70px" children={ROW_TITLE[type]} />
      {tags?.map((tag, i) => (
        <DisciplineTag key={i} children={tag} />
      ))}
    </HStack>
  );
};

export default TagsRow;

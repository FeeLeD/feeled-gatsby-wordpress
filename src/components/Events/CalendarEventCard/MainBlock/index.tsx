import React, { FC } from "react";
import parse from "html-react-parser";
import {
  NormalizedEvent_Disciplines,
  NormalizedEvent_Links,
} from "../../types";
import { Box, Grid, HStack, Image, Stack, Text } from "@chakra-ui/react";
import LinksBlock from "./LinksBlock";
import TagsRow from "./TagsRow";

type Props = {
  title: string | undefined;
  disciplines: NormalizedEvent_Disciplines | undefined;
  content: string | undefined;
  links: NormalizedEvent_Links;
};

const MainBlock: FC<Props> = ({ title, disciplines, content, links }) => {
  const noDisciplines =
    (!disciplines?.men || disciplines.men.length === 0) &&
    (!disciplines?.women || disciplines.women.length === 0);

  const isEmptyEvent = noDisciplines && (!content || content === "");

  return (
    <Grid gridTemplateColumns="auto 160px" p="24px">
      <Stack spacing="20px">
        <Text fontSize="h3" fontWeight="500" children={title} />

        {isEmptyEvent && (
          <HStack flex={1}>
            <Image opacity={0.6} src="/skier.svg" />
            <Text opacity={0.6} fontSize="md">
              Информация о событии отсутствует
            </Text>
          </HStack>
        )}

        {!noDisciplines && (
          <Stack spacing="8px">
            {disciplines?.women && disciplines.women.length > 0 && (
              <TagsRow type="women" tags={disciplines.women} />
            )}

            {disciplines?.men && disciplines.men.length > 0 && (
              <TagsRow type="men" tags={disciplines.men} />
            )}
          </Stack>
        )}

        <Box fontSize="md">{parse(content ?? "")}</Box>
      </Stack>

      <LinksBlock links={links} />
    </Grid>
  );
};

export default MainBlock;

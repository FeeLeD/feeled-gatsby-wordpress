import React, { FC } from "react";
import { NormalizedEvent_Links } from "../../types";
import { Stack } from "@chakra-ui/react";
import LinkButton from "./LinkButton";

type Props = {
  links: NormalizedEvent_Links;
};

const LinksBlock: FC<Props> = ({ links }) => {
  return (
    <Stack>
      {links.resultsLink && (
        <LinkButton styling="fill" href={links.resultsLink}>
          Результаты
        </LinkButton>
      )}

      {links.informationLink && (
        <LinkButton styling="outline" href={links.informationLink}>
          Положение
        </LinkButton>
      )}
    </Stack>
  );
};

export default LinksBlock;

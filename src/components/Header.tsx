import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Header: FC = () => {
  const {
    wp: {
      generalSettings: { title, description },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <HStack my="32px" spacing="24px">
      <Image
        w="100px"
        h="100px"
        src="http://feeled.ru/wp-content/uploads/2021/09/flgso.png"
      />

      <Stack spacing="4px">
        <Heading fontSize="h2">{title}</Heading>
        <Text fontSize="md" opacity="60%">
          {description}
        </Text>
      </Stack>
    </HStack>
  );
};

export default Header;

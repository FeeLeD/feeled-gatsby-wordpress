import React, { FC } from "react";
import { Box, Image, HStack, Stack, Text, Link } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";

const Footer: FC = () => {
  const {
    wp: {
      generalSettings: { title, instagram, footerContent, facebook, vk },
    },
  } = useStaticQuery<{
    wp: {
      generalSettings: {
        title: string;
        instagram: string;
        footerContent: string;
        facebook: string;
        vk: string;
      };
    };
  }>(graphql`
    query FooterQuery {
      wp {
        generalSettings {
          title
          instagram
          footerContent
          facebook
          vk
        }
      }
    }
  `);

  return (
    <Box w="100%" h="230px" bg="#35363A" pt="72px">
      <HStack w="1150px" mx="auto" justify="space-between">
        <HStack spacing="32px">
          <Image src="/snowflake.svg" />

          <Stack w="50%" color="#FAFAFA">
            <Text as="b" children={title} />

            <Text children={footerContent} />
          </Stack>
        </HStack>

        <HStack>
          {vk && (
            <Link href={vk} isExternal>
              <Image src="/vk.svg" />
            </Link>
          )}

          {facebook && (
            <Link href={facebook} isExternal>
              <Image src="/facebook.svg" />
            </Link>
          )}

          {instagram && (
            <Link href={instagram} isExternal>
              <Image src="/instagram.svg" />
            </Link>
          )}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;

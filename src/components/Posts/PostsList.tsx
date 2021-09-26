import React, { FC } from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  posts:
}

const PostsList: FC = () => {
  return (
    <>
      {posts.map((post, i) => (
        <Stack key={i} bg="white" p="32px" borderRadius="8px" spacing="24px">
          <HStack spacing="20px">
            <Image w="40px" h="40px" src="flgso.svg" />
            <Text
              fontSize="md"
              opacity={0.5}
              children={dateHandler.getDateRange({
                startDate: dayjs(post.date),
                endDate: dayjs(post.date),
              })}
            />
          </HStack>

          <Heading fontSize="h4" children={post.title} />

          <Box
            fontSize="normal"
            wordBreak="break-word"
            sx={{
              "> p:first-of-type": {
                mt: "0",
                mb: "8px",
              },
              "> p": {
                my: "8px",
              },
            }}
            children={parse(post.content)}
          />
          {/* if we have a featured image for this post let's display it */}
          {/* {featuredImage?.fluid && (
              <Image
                fluid={featuredImage.fluid}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }}
              />
            )} */}
        </Stack>
      ))}
    </>
  );
};

export default PostsList;

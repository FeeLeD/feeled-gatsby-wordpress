import React, { FC, useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import parse from "html-react-parser";
import { dateHandler } from "../../Events/dates";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {
  date: string;
  title: string;
  content: string;
};

const Post: FC<Props> = ({ date, title, content }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isBig, setIsBig] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const togglePostSize = () => setShowFull(!showFull);

  useEffect(() => {
    if (boxRef.current && boxRef.current?.offsetHeight >= 350) {
      setIsBig(true);
    }
  }, []);

  return (
    <Stack bg="white" p="32px" borderRadius="8px" spacing="24px">
      <HStack spacing="16px">
        <Image w="40px" h="40px" src="flgso.svg" />
        <Text
          opacity={0.5}
          children={dateHandler.getDateRange({
            startDate: dayjs(date),
            endDate: dayjs(date),
          })}
        />
      </HStack>

      <Heading fontSize="h4" children={title} />

      <Box
        ref={boxRef}
        pos="relative"
        fontSize="normal"
        wordBreak="break-word"
        maxH={showFull ? "fit-content" : "350px"}
        overflow="hidden"
        sx={{
          "> p:first-of-type": {
            mt: "0",
            mb: "8px",
          },
          "> p": {
            my: "8px",
          },
        }}
      >
        {parse(content)}

        {isBig && !showFull && (
          <Box
            pos="absolute"
            bottom="0"
            w="100%"
            boxShadow="0 10px 30px 60px white"
          />
        )}
      </Box>

      {isBig && (
        <Button w="120px" onClick={togglePostSize}>
          {showFull ? "Скрыть" : "Подробнее"}
        </Button>
      )}
    </Stack>
  );
};

export default Post;

{
  /* if we have a featured image for this post let's display it */
}
{
  /* {featuredImage?.fluid && (
<Image
  fluid={featuredImage.fluid}
  alt={featuredImage.alt}
  style={{ marginBottom: 50 }}
/>
)} */
}

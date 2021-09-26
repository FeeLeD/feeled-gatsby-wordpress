import React, { FC } from "react";
import { graphql } from "gatsby";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import parse from "html-react-parser";

const InfoPage: FC<{ data: { page: { title: string; content: string } } }> = ({
  data: { page },
}) => {
  return (
    <Layout>
      <Stack spacing="18px">
        <Heading fontSize="h1">{page.title}</Heading>

        <Box bg="white" p="32px" borderRadius="8px">
          {parse(page.content)}
        </Box>
      </Stack>
    </Layout>
  );
};

export default InfoPage;

export const query = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`;

import React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";

import Bio from "../components/bio";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes;

  console.log(posts);

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title="All posts" />

      <Grid gridTemplateColumns="325px auto" gridGap="24px">
        <Box bg="white" borderRadius="8px" h="500px" />

        <Stack spacing="24px">
          <Stack spacing="18px">
            <Heading fontSize="h1">Новости</Heading>

            {posts.map((post, i) => (
              <Stack
                key={i}
                bg="white"
                p="32px"
                borderRadius="8px"
                spacing="24px"
              >
                <HStack spacing="20px">
                  <Image w="40px" h="40px" src="flgso.svg" />
                  <Text fontSize="md" opacity={0.5} children={post.date} />
                </HStack>

                <Heading fontSize="h4" children={post.title} />

                <Box
                  fontSize="normal"
                  wordBreak="break-word"
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
          </Stack>
        </Stack>
      </Grid>

      {/* <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
            </li> */}

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        content
      }
    }
  }
`;

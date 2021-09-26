import React, { FC } from "react";
import { graphql } from "gatsby";
import { Heading, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { WPEvent } from "../components/Events/types";
import EventsList from "../components/Events/EventsList";

type Events = {
  allWpEvent: {
    nodes: WPEvent[];
  };
};

const EventsPage: FC<{ data: Events }> = ({ data }) => {
  return (
    <Layout>
      <Stack spacing="24px">
        <Heading fontSize="h1">Календарь</Heading>

        <EventsList events={data.allWpEvent.nodes} />
      </Stack>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  query WpEvents {
    allWpEvent(sort: { fields: date, order: ASC }) {
      nodes {
        id
        title
        content
        date
        endDate
        link
        eventsCategories {
          nodes {
            name
            wpParent {
              node {
                name
              }
            }
          }
        }
        tags {
          nodes {
            name
          }
        }
        venue {
          title
          address
          city
        }
      }
    }
  }
`;

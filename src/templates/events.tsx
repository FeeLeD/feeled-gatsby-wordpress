import React, { FC } from "react";
import { graphql } from "gatsby";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

type Events = {
  allWpEvent: {
    events: Array<{
      id: string;
      title: string;
      content: string;
      date: string;
      link: string;
      venue: {
        address: string;
        city: string;
      };
      tags: {
        competitionTypes: Array<{
          name: string;
        }>;
      };
      eventsCategories: {
        disciplines: Array<{
          name: string;
          wpParent: {
            gender: Array<{ name: string }>;
          };
        }>;
      };
    }>;
  };
};

const EventsPage: FC<{ data: Events }> = ({ data: { allWpEvent } }) => {
  return (
    <Layout>
      <Stack spacing="18px">
        <Heading fontSize="h1">Календарь</Heading>

        {allWpEvent.events.map(event => (
          <Box key={event.id} bg="white" p="24px" borderRadius="8px">
            {/* <Text>{event.tags.competitionTypes[0].name}</Text> */}
            {/* <Text>{event.date}</Text> */}
            <Text>
              {event.venue?.address}, {event.venue?.city}
            </Text>
            {/* <Text>{event.content}</Text> */}
            {/* {event.eventsCategories.disciplines.map((d, i) => (
              <Text key={i}>{d.name}</Text>
            ))} */}
          </Box>
        ))}
      </Stack>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  query WpEvents {
    allWpEvent {
      events: nodes {
        id
        title
        content
        date
        link
        eventsCategories {
          disciplines: nodes {
            name
            wpParent {
              gender: node {
                name
              }
            }
          }
        }
        tags {
          competitionTypes: nodes {
            name
          }
        }
        venue {
          address
          city
        }
      }
    }
  }
`;

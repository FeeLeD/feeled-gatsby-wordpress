import React, { FC, useState } from "react";
import dayjs from "dayjs";
import { WPEvent } from "./types";
import { Stack, Button } from "@chakra-ui/react";
import CalendarEventCard from "./CalendarEventCard";

type Props = {
  events: WPEvent[];
};

const EventsList: FC<Props> = ({ events }) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <Stack spacing="16px">
      <Button
        h="fit-content"
        p="0"
        bg="none"
        color="winter.85"
        _hover={{ opacity: 0.6 }}
        _active={{ opacity: 0.8 }}
        onClick={toggleShowAll}
        children={
          showAll ? "Скрыть прошедшие события" : "Показать прошедшие события"
        }
      />

      {showAll
        ? events.map(event => (
            <CalendarEventCard key={event.id} event={event} />
          ))
        : events
            .filter(e => dayjs(e.date).isAfter(dayjs()))
            .map(event => <CalendarEventCard key={event.id} event={event} />)}
    </Stack>
  );
};

export default EventsList;

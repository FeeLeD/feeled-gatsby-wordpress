import dayjs from "dayjs";

export type WPEvent = {
  id: string;
  title?: string;
  content?: string;
  date?: string;
  endDate?: string;
  link?: string;
  venue?: WPEvent_Venue;
  tags?: WPEvent_Tags;
  eventsCategories?: WPEvent_EventsCategories;
};

export type WPEvent_Tags = {
  nodes?: Array<{
    name?: string;
  }>;
};

export type WPEvent_Venue = {
  title?: string;
  address?: string;
  city?: string;
};

export type WPEvent_EventsCategories = {
  nodes?: Array<{
    name?: string;
    wpParent?: {
      node?: { name?: string };
    };
  }>;
};

// ––––––––––––––––––––––––––––––––––––––––––––

export type NormalizedEvent = {
  id: string;
  title?: string;
  content?: string;
  date?: dayjs.Dayjs;
  endDate?: dayjs.Dayjs;
  link?: string;
  venue?: NormalizedEvent_Venue;
  competitionTypes?: string[];
  disciplines?: NormalizedEvent_Disciplines;
  links: NormalizedEvent_Links;
};

export type NormalizedEvent_Disciplines = {
  men: string[];
  women: string[];
};

export type NormalizedEvent_Links = {
  informationLink?: string;
  resultsLink?: string;
};

export type NormalizedEvent_Venue =
  | {
      title?: string;
      description?: string;
    }
  | undefined;

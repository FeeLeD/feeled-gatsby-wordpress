import {
  NormalizedEvent_Disciplines,
  NormalizedEvent_Links,
  NormalizedEvent_Venue,
  WPEvent_EventsCategories,
  WPEvent_Tags,
  WPEvent_Venue,
} from "../types";

function normalizeEventCategories(
  eventsCategories: WPEvent_EventsCategories | undefined
): NormalizedEvent_Disciplines | undefined {
  if (!eventsCategories || !eventsCategories.nodes) {
    return;
  }

  const categories: NormalizedEvent_Disciplines = {
    men: [] as string[],
    women: [] as string[],
  };

  eventsCategories.nodes.map(category => {
    const gender = category.wpParent?.node?.name;

    switch (gender) {
      case "Мужчины":
        categories.men.push(category.name as string);
        return;
      case "Женщины":
        categories.women.push(category.name as string);
        return;
      default:
        return;
    }
  });

  return categories;
}

function normalizeEventVenue(
  venue: WPEvent_Venue | undefined
): NormalizedEvent_Venue | undefined {
  if (!venue) {
    return;
  }

  return {
    title: venue.title,
    description: `
      ${venue.city ?? ""}
      ${venue.city && venue.address ? ", " : ""}
      ${venue.address ?? ""}
    `,
  };
}

function normalizeTags(tags?: WPEvent_Tags): string[] {
  if (!tags || !tags.nodes) {
    return ["Событие"];
  }

  const eventTags = tags.nodes.reduce((arr, node) => {
    if (node.name) return [...arr, node.name];
    return arr;
  }, [] as string[]);

  return eventTags.length > 0 ? eventTags : ["Событие"];
}

function removeFromContent(content: string, piece: "Положение" | "Результаты") {
  const regex =
    piece === "Положение"
      ? /(?<=<a).+?(?=Положение<\/a>)/g
      : /(?<=<a).+?(?=Результаты<\/a>)/g;
  const startIndex = content.search(regex);
  const contentToRemove = content.match(regex);

  if (startIndex && contentToRemove) {
    const firstPart = content.slice(0, startIndex - 2);
    const secondPart = content.slice(
      startIndex + contentToRemove[0].length + piece.length + 4
    );

    return firstPart + secondPart;
  }

  return content;
}

function normalizeContent(content?: string): string | undefined {
  if (!content) {
    return "";
  }

  const contentWithoutInfo = removeFromContent(content, "Положение");
  const resultContent = removeFromContent(contentWithoutInfo, "Результаты");

  return resultContent;
}

function getLinksFromContent(content?: string): NormalizedEvent_Links {
  const result = { informationLink: "", resultsLink: "" };
  if (!content) {
    return result;
  }

  const a = content.match(/(?<=<a).+?(?=Положение<\/a>)/g);
  if (a?.length) {
    const b = a[0].match(/(?<=href=").+?(?=")/g);

    if (b?.length) {
      result.informationLink = b[0];
    }
  }

  const c = content.match(/(?<=<a).+?(?=Результаты<\/a>)/g);
  if (c?.length) {
    const d = c[0].match(/(?<=href=").+?(?=")/g);

    if (d?.length) {
      result.resultsLink = d[0];
    }
  }

  return result;
}

export const normalizeEvent = {
  eventCategories: normalizeEventCategories,
  venue: normalizeEventVenue,
  tags: normalizeTags,
  content: normalizeContent,
  getLinksFromContent,
};

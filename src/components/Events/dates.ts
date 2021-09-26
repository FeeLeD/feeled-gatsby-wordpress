import dayjs from "dayjs";

type Dayjs_Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

type Dayjs_WeekDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

function translateFullDateToRussian(dateString: string) {
  const [date, month, year] = dateString.split(" ");
  const dateInt = parseInt(date, 10);

  const months = {
    January: "января",
    February: "февраля",
    March: "марта",
    April: "апреля",
    May: "мая",
    June: "июня",
    July: "июля",
    August: "августа",
    September: "сентября",
    October: "октября",
    November: "ноября",
    December: "декабря",
  };

  return `${dateInt} ${months[month as Dayjs_Month]} ${year}`;
}

function translateDayToRussian(day: string) {
  const days = {
    Monday: "Понедельник",
    Tuesday: "Вторник",
    Wednesday: "Среда",
    Thursday: "Четверг",
    Friday: "Пятница",
    Saturday: "Суббота",
    Sunday: "Воскресенье",
  };

  return days[day as Dayjs_WeekDay];
}

export const dateHandler = {
  getDateRange: ({
    startDate,
    endDate,
  }: {
    startDate: dayjs.Dayjs | undefined;
    endDate: dayjs.Dayjs | undefined;
  }) => {
    if (!startDate) {
      return "";
    }

    const startDateString = startDate.format("DD MMMM YYYY");
    const endDateString = endDate?.format("DD MMMM YYYY");

    if (startDate.isSame(endDate, "date")) {
      return translateFullDateToRussian(startDateString);
    }

    if (endDateString) {
      return `
        ${translateFullDateToRussian(startDateString)} – 
        ${translateFullDateToRussian(endDateString)}
      `;
    }
  },
  getDaysRange: ({
    startDate,
    endDate,
  }: {
    startDate: dayjs.Dayjs | undefined;
    endDate: dayjs.Dayjs | undefined;
  }) => {
    if (!startDate) {
      return "";
    }

    const startDayString = startDate.format("dddd");
    const endDayString = endDate?.format("dddd");

    if (startDate.isSame(endDate, "date")) {
      return translateDayToRussian(startDayString);
    }

    if (endDayString) {
      return `
        ${translateDayToRussian(startDayString)} – 
        ${translateDayToRussian(endDayString)}
      `;
    }
  },
};

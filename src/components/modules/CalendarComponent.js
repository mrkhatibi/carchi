"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import toast, { Toaster } from "react-hot-toast";

export default function CalendarComponent({ setTime }) {
  const timeHandler = (e) => {
    const time = `${e.year}/${e.month.number}/${e.day}`;
    setTime(time);
  };
  const today = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
  }).format(new Date());
  const month = new Intl.DateTimeFormat("fa-IR", {
    month: "numeric",
  }).format(new Date());
  const englishToday = today.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  const englishMonth = month.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  return (
    <div style={{ direction: "rtl" }}>
      <DatePicker
        mapDays={({ date }) => {
          let isWeekend = [6].includes(date.weekDay.index);
          if (
            (date.day < englishToday && date.month.number <= englishMonth) ||
            date.month.number < englishMonth
          )
            return {
              disabled: true,
              style: { color: "#ff1515ff" },
              onClick: () =>
                toast.error("نوبت خود را در روز های آینده انتخاب کنید"),
            };
          if (isWeekend)
            return {
              disabled: true,
              style: { color: "#ff1515ff" },
              onClick: () =>
                toast.error("از ارائه خدمات در روزهای جمعه معذوریم"),
            };
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={(e) => timeHandler(e)}
      />
      <Toaster />
    </div>
  );
}

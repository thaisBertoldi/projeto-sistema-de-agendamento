import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DivCalendar } from "./Calendar.style";
import esLocale from "@fullcalendar/core/locales/pt-br";
import api from "../api";

function Calendar() {
  const [events, setEvents] = useState([]);

  async function getAllAppointments() {
    const data = await api.get("/get-all-appointments");
    setEvents(data.data);
  }

  useEffect(() => {
    getAllAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, {});
  
  return (
    <DivCalendar>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        locale={esLocale}
        events={events}
      />
    </DivCalendar>
  );
}

export default Calendar;

import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { DivCalendar } from './Calendar.style'
import esLocale from '@fullcalendar/core/locales/pt-br'

export class Calendar extends Component {
  render() {
    return (
        <DivCalendar>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                locale={esLocale}
                events={[
                    { title: 'event 1', date: '2019-04-01' },
                    { title: 'event 2', date: '2019-04-02' }
                ]}
            />
      </DivCalendar>
    )
  }
}

export default Calendar
import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'

export default class Calendrier extends React.Component{
    
    
    render() {
        return (
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
            dateClick={this.handleDateClick}
            eventContent={renderEventContent}
            initialView={["dayGridMonth", "dayGridWeek", 'dayGridDay']}
          />
        )
      }
    
    //   handleDateClick = (arg) => { // bind with an arrow function
    //     alert(arg.dateStr)
    //   }
    
    }

    function renderEventContent(eventInfo) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }
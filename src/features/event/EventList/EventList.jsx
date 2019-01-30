import React, { Component } from 'react'
import EventListItem from './EventListItem';

export class EventList extends Component {
  render() {
      const { events, onOpenEvent, deleteEvent } = this.props;
    return (
        events.map(event => <EventListItem key={event.id} event={event} onOpenEvent={onOpenEvent} deleteEvent={deleteEvent} />)
    )
  }
}

export default EventList

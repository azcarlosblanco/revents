import React, { Component, Fragment} from 'react'
import EventListItem from './EventListItem';

export class EventList extends Component {
  render() {
      const { events } = this.props;
    return (
        events.map(event => <EventListItem key={event.id} event={event} />)
    )
  }
}

export default EventList

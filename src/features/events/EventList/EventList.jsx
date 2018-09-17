import React, {Component} from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, handleOpenEvent, handleDeleteEvent} = this.props;
    return (
      <div>
        <h1>Let's Rendezvous</h1>
        {events.map((event) => (<EventListItem
          key={event.id}
          event={event}
          handleOpenEvent={handleOpenEvent}
          handleDeleteEvent={handleDeleteEvent}/>))}
      </div>
    );
  }
}

export default EventList;
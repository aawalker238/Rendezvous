import React, {Component} from 'react';
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  
  render() {
    const { event, handleOpenEvent, handleDeleteEvent } = this.props;
    
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={ event.hostPhotoURL } />
              <Item.Content>
                <Item.Header as="a">{ event.title }</Item.Header>
                <Item.Description>
                  Hosted by
                  <a>{ event.hostedBy }</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock"/>
            { event.date } |
            <Icon name="marker"/>
            { event.venue }
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees && event.attendees.map((attendee) => (
              <EventListAttendee attendee={ attendee } key={attendee.id} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <p>{ event.description }</p>
          <Button onClick={handleDeleteEvent(event.id)} as="a" color="red" floated="right" content="Delete"/>
          <Button onClick={handleOpenEvent(event)} as="a" color="teal" floated="right" content="View"/>
          {/*
            <Icon className="push-right" color='red' size='big' onClick={handleDeleteEvent(event.id)} link name="trash"  />
            <Icon className="push-right" color='teal' size='big' onClick={handleOpenEvent(event)} link name="eye"  />
          */}
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
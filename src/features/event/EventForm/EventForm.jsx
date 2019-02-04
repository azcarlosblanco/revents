import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
import cuid from "cuid";

export class EventForm extends Component {
  state = {
    event: { ...this.props.event }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if(this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else { 
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }

      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }

    this.setState({ event: { ...this.props.event } });
  };

  onInputChange = e => {
    const event = this.state.event;
    event[e.target.name] = e.target.value;
    this.setState({ event });
  };

  render() {
    const { handleFormOpen } = this.props;
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              value={event.title}
              name="title"
              onChange={this.onInputChange}
              placeholder="Event title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              value={event.date}
              name="date"
              onChange={this.onInputChange}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={event.city}
              name="city"
              onChange={this.onInputChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={event.venue}
              name="venue"
              onChange={this.onInputChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              value={event.hostedBy}
              name="hostedBy"
              onChange={this.onInputChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

const mapDispatchToProps = { updateEvent, createEvent};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

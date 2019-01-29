import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export class EventForm extends Component {

  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.createEvent(this.state.event);
  }

  onInputChange = e => {
    const event = this.state.event;
    event[e.target.name] = e.target.value
    this.setState({event});
  }

  render() {
    const { handleFormOpen } = this.props;
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input value={event.title} name="title" onChange={this.onInputChange} placeholder="Event title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input value={event.date} name="date" onChange={this.onInputChange} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input value={event.city} name="city" onChange={this.onInputChange} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input value={event.venue} name="venue" onChange={this.onInputChange} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input value={event.hostedBy} name="hostedBy" onChange={this.onInputChange} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormOpen} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;

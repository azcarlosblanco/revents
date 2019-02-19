import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export class EventDashboard extends Component {

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId)
  };

  render() {
    const { events, loading } = this.props;

    if (loading) {
      return <LoadingComponent inverted />;
    }
    
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
    events: state.events,
    loading: state.async.loading
});

const mapDispatchToProps = {
  createEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDashboard);

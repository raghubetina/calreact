var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'Team standup meeting',
      appt_time: '25 January 2016 9am'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var appointment = {title: this.state.title, appt_time: this.state.appt_time};
    $.post('/appointments',
            {appointment: appointment})
          .done(function(data) {
            this.setState({appointments: data});
          }.bind(this));
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});

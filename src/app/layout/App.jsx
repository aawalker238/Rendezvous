import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar/Navbar';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventDetailsPage from '../../features/events/EventDetails/EventDetailsPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailsPage from '../../features/user/UserDetails/UserDetailsPage';
import EventForm from '../../features/events/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return [
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>,
      <Route
        path="/(.+)"
        render={() => [
          <Navbar />,
          <Container className="main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/events" component={EventDashboard} />
              <Route path="/event/:id" component={EventDetailsPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailsPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createRendezvous" component={EventForm} />
            </Switch>
          </Container>
        ]}
      />
    ];
  }
}

export default App;

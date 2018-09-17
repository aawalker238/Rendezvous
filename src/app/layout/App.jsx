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
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component {
  render() {
    return [
      <Switch key="__App01">
        <Route exact path="/" component={HomePage} />
      </Switch>,
      <Route
        key="__App02"
        path="/(.+)"
        render={() => [
          <Navbar key="__App02a" />,
          <Container key="__App02b" className="main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/events" component={EventDashboard} />
              <Route path="/event/:id" component={EventDetailsPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailsPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createRendezvous" component={EventForm} />
              
              <Route path="/test" component={TestComponent} />
            </Switch>
          </Container>
        ]}
      />
    ];
  }
}

export default App;

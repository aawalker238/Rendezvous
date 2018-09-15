import React from 'react';

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img className="ui image massive" src="/assets/logo03.svg" alt="logo"/>
            <div className="content">Rendezvous</div>
          </h1>
          <h2><em>n.</em> [ren·dez·vous] \ˈrän-di-ˌvüz\</h2>
          <p>a meeting at an appointed place and time</p>
          <div onClick={() => history.push("/events")} className="ui huge white inverted button">
            Let's Rendezvous!
            <i className="right arrow icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
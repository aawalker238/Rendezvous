import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import EventQuote from './EventQuote';

const quotes = [
  {
    quote: 'I believe the destiny of your generation - and your nation - is a rendezvous with excellence.',
    author: 'Lyndon B. Johnson'
  },
  {
    quote: 'I have a rendezvous with life.',
    author: 'Countee Cullen'
  },
  {
    quote: 'Each generation has its own rendezvous with the land, for despite our fee titles and claims of ownership, we are all brief tenants on this planet.',
    author: 'Stewart Udall'
  },
  {
    quote: 'If I had my life to live over, I\'d have fewer meetings and more rendezvous.' ,
    author: 'Robert Breault'
  },
  {
    quote: 'You and I have a rendezvous with destiny. We will preserve for our children this, the last best hope of man on earth.',
    author: 'Ronald Reagan'
  },
  {
    quote: 'A troubled and afflicted mankind looks to us, pleading for us to keep our rendezvous with destiny; that we will uphold the principles of self-reliance, self-discipline, morality, and - above all - responsible liberty for every individual that we will become that shining city on a hill.',
    author: 'Ronald Reagan'
  },
  {
    quote: 'There\'s room for everyone at the rendezvous of victory.',
    author: 'Aime Cesaire'
  },
  {
    quote: 'Reading is a rendezvous with your soul.',
    author: 'Jeanette Winterson'
  },
  {
    quote: 'There is an ancient Indian saying: "We do not inherit the earth from our ancestors; we borrow it from our children." If we use this ethic as a moral compass, then our rendezvous with reality can also become a rendezvous with opportunity.',
    author: 'Patricia Schroeder'
  },
]

class EventQuotesPanel extends Component {
  
  state = {
    quotes
  }
  
  render() {
    return (
      <Grid columns={2} id="event-quotes-panel" >
        {this.state.quotes.map((quoteObj) => (
          <EventQuote key={quoteObj.quote} quoteObj={quoteObj} />
        ))}
      </Grid>
    );
  }
}

export default EventQuotesPanel;
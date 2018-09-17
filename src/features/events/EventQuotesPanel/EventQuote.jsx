import React from 'react';
import { Icon, Segment, Grid } from 'semantic-ui-react';

const EventQuote = ({quoteObj}) => {
  const { quote, author } = quoteObj;
  return (
    <Grid.Column>
      <Segment>
        <p><Icon name="quote left"/>{quote}</p>
        <p>~ {author}</p>
      </Segment>
    </Grid.Column>
  );
}

export default EventQuote;
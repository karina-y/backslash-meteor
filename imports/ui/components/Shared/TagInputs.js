/*
created by: karina
created date: 11/19/17
*/

import React from 'react';
import { Session } from 'meteor/session';

class TagInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tags: null
    }
  }

  componentDidMount() {
    const state = this.state;

    Meteor.call('tags.view', function(err, response) {

      if (!err) {
        Session.set('tags', response);
      }
      else {
        console.log(err);
      }

    });

    if (Session.get('tags')) {
      this.setState({
        loading: false,
        tags: Session.get('tags')
      })
    }
  }

  render() {
    console.log(this.state.tags);

    return (
      !this.state.loading
        ?
        <div>success y'alllllll</div>
        :
        <div>error : (</div>
    )
  }
}

export default TagInputs;
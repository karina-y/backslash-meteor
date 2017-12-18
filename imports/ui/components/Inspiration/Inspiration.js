/*
created by: karina
created date: 11/16/17
*/

/*
- add component for search results to be used for closet, outfits, and inspiration
- gonna need to pull in all tags from taginputs>taginput up to this component to render my search results > tagsearchresults
 */

import React from 'react';
import { Session } from 'meteor/session';
import "./Inspiration.less";
import TagInputs from '../Shared/TagInputs';
import { Col, Image, Row } from 'react-bootstrap'
import NullChecks from '../../methods/NullChecks';

class Inspiration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: null
    };

    this.searchPins = this.searchPins.bind(this);
  }

  searchPins(tags) {

    Meteor.call('pinterest.viewPins', tags, function(err, response) {
      if (!err) {
        console.log("response", response);
        Session.set('pins', response);
      }
      else {
        console.log(err);
      }
    });

    const page = this;

    //watch for a change
    Tracker.autorun(function() {
      if (Session.get('pins')) {
        let sessionVal = Session.get('pins');

        page.setState({
          searchResults: sessionVal
        });
      }
    });
  }

  render() {

    return (
      <div className="inspiration">
        <TagInputs searchPins={this.searchPins} />

        {
          NullChecks.isNullOrEmptyArray(this.state.searchResults)
            ?
            ''
            :
            <Row className="search-results-container container-fluid">
              {/*map through*/}
              {this.state.searchResults.map((image, index) => (
                <Col sm={3} data-index={index} key={index} className="text-center image-container">

                  <Image src={image.image.original.url} className="center-cropped" />

                </Col>
              ))}
            </Row>
        }

      </div>
    )
  }
}

export default Inspiration;
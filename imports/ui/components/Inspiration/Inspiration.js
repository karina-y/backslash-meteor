/*
created by: karina
created date: 11/16/17
*/

import React from 'react';
import "./Inspiration.less";
import TagInputs from '../Shared/TagInputs'

class Inspiration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="inspiration">
        <TagInputs/>

        <div className="search-results-container container-fluid">
          {/*map through*/}
          <div className="col-sm-3 text-center image-container" data-ng-repeat="pin in ic.searchResults">
            <img ng-src="{{pin.image.original.url}}" className="inspiration-image center-cropped" />
          </div>
        </div>
      </div>
    )
  }
}

export default Inspiration;
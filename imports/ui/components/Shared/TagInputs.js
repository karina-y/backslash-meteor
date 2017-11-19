/*
created by: karina
created date: 11/19/17
*/

import React from 'react';
import { Session } from 'meteor/session';
import Select from 'react-select';
import { Col, Row } from 'react-bootstrap'

import 'react-select/dist/react-select.css';
import './TagInputs.less';
import TagInput from './TagInput'

class TagInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tags: null,
      tagSetOneValue: []
    }

    this.updateSessionVars = this.updateSessionVars.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  async componentDidMount() {

    await Meteor.call('tags.view', function(err, response) {

      if (!err) {
        console.log("response", response);
        Session.set('tags', response);
      }
      else {
        console.log(err);
      }

    });

    const page = this;

    //watch for a change
    Tracker.autorun(function() {
      if (Session.get('tags')) {
        let sessionVal = Session.get("tags");
        page.updateSessionVars(sessionVal);
      }
    });

  }

  updateSessionVars(sessionVal) {
    this.setState({
      loading: false,
      tags: sessionVal
    });
  }

  handleSelectChange (tagSetOneValue) {

    this.setState({
      tagSetOneValue
    });
  }

  render() {
    let tags = this.state.tags;
    let loading = this.state.loading;

    let valueKey;
    let tagSets;
    let tagSetOne;
    let tagSetTwo;
    let tagSetThree;
    let tagSetFour;


    if (!loading) {
      valueKey = "TagSearchName"; //update eventually to be brought in via props

      //for each unique tagcategoryid create a set then push into tagsets
      //todo make this dynamic, as if i don't know what tagcategoryid's are coming in
      tagSetOne = tags.filter(tag => tag.TagCategoryId === 1);
      tagSetTwo = tags.filter(tag => tag.TagCategoryId === 2);
      tagSetThree = tags.filter(tag => tag.TagCategoryId === 3);
      tagSetFour = tags.filter(tag => tag.TagCategoryId === 4);


      //for each set in tagsets, render a select with its own unique state to handle changes
      tagSets = [
        tagSetOne,
        tagSetTwo,
        tagSetThree,
        tagSetFour
      ];
    }

    return (
      !loading
        ?
        <div className="tag-inputs">
          {
            <Row>
              {/* colors */}

                {tagSets.map((set, index) => (
                  <Col sm={3} data-index={index} key={index}>

                    <TagInput set={set} valueKey={valueKey} />

                  </Col>
                ))}


            </Row>
          }
        </div>
        :
        <div>error : (</div>
    )
  }
}

export default TagInputs;
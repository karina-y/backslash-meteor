/*
created by: karina
created date: 11/19/17
*/

import React from 'react';
import { Session } from 'meteor/session';
import { Button, Col, Row } from 'react-bootstrap'
import TagInput from './TagInput'

import 'react-select/dist/react-select.css';
import './TagInputs.less';

import TagEnums from '../../../api/Tags/enums';

const TAG_CATEGORY_ENUMS = TagEnums.TAG_CATEGORY_ENUMS;

class TagInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tags: null,
      tagSetOneValue: [],
      searchPins: props.searchPins
    }

    this.updateSessionVars = this.updateSessionVars.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.collectTags = this.collectTags.bind(this);
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

  collectTags(tags) {

    this.setState({
      //check if we've already got any of the tags
      tags: Array.from(new Set(tags))
    });

  }

  render() {
    let tags = this.state.tags;
    let loading = this.state.loading;

    let valueKey;
    let tagSetsFirstRow;
    let tagSetsSecondRow;
    let tagSetsThirdRow;
    let tagSetsFourthRow;
    let tagSetOne;
    let tagSetTwo;
    let tagSetThree;
    let tagSetFour;
    let tagSetFive;
    let tagSetSix;
    let tagSetSeven;
    let tagSetEight;
    let tagSetNine;
    let tagSetTen;
    let tagSetEleven;
    let tagSetTwelve;
    let tagSetThirteen;
    let tagSetFourteen;
    let tagSetFifteen;
    let tagSetSixteen;


    if (!loading) {
      valueKey = "TagSearchName"; //update eventually to be brought in via props

      //for each unique tagcategoryid create a set then push into tagsets
      //todo make this dynamic, as if i don't know what tagcategoryid's are coming in
      tagSetOne = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.color.enum);
      tagSetTwo = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.material.enum);
      tagSetThree = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.tops.enum);
      tagSetFour = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.bottoms.enum);
      tagSetFive = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.onePieces.enum);
      tagSetSix = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.outerwear.enum);
      tagSetSeven = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.occasion.enum);
      tagSetEight = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.season.enum);
      tagSetNine = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.style.enum);
      tagSetTen = tags.filter(tag => tag.TagCategoryId === TAG_CATEGORY_ENUMS.weather.enum);
      // tagSetEleven = tags.filter(tag => tag.TagCategoryId === 11);
      // tagSetTwelve = tags.filter(tag => tag.TagCategoryId === 12);
      // tagSetThirteen = tags.filter(tag => tag.TagCategoryId === 13);
      // tagSetFourteen = tags.filter(tag => tag.TagCategoryId === 14);
      // tagSetFifteen = tags.filter(tag => tag.TagCategoryId === 15);
      // tagSetSixteen = tags.filter(tag => tag.TagCategoryId === 16);


      //for each set in tagsets, render a select with its own unique state to handle changes
      tagSetsFirstRow = [
        tagSetOne,
        tagSetTwo,
        tagSetThree,
        tagSetFour,
        tagSetFive
      ];

      tagSetsSecondRow = [
        tagSetSix,
        tagSetSeven,
        tagSetEight,
        tagSetNine,
        tagSetTen
      ];

      // tagSetsThirdRow = [
      //   tagSetNine,
      //   tagSetTen,
      //   tagSetEleven,
      //   tagSetTwelve
      // ];
      //
      // tagSetsFourthRow = [
      //   tagSetThirteen,
      //   tagSetFourteen,
      //   tagSetFifteen,
      //   tagSetSixteen
      // ];
    }

    return (
      !loading
        ?
        <div className="tag-inputs">

          {/* colors | material | tops | bottoms */}
          <Row className="center-content">
            {tagSetsFirstRow.map((set, index) => (
              <Col sm={2} data-index={index} key={index}>

                <TagInput set={set} valueKey={valueKey} collectTags={this.collectTags} />

              </Col>
            ))}
          </Row>

          {/* onepieces | outerwear | occasion | seasion */}
          <Row className="center-content">
            {tagSetsSecondRow.map((set, index) => (
              <Col sm={2} data-index={index} key={index}>

                <TagInput set={set} valueKey={valueKey} collectTags={this.collectTags} />

              </Col>
            ))}
          </Row>

          {/* submit button */}
          <Row>
            <Col sm={12}>
              <Button onClick={() => this.state.searchPins(this.state.tags)} className="btn-backslash">Style Me!</Button>
            </Col>
          </Row>

        </div>
        :
        <div>error : (</div>
    )
  }
}

export default TagInputs;
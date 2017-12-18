/*
created by: karina
created date: 11/19/17
*/

import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import 'react-select/dist/react-select.css';
import './TagInput.less';

class TagInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueKey: props.valueKey,
      set: props.set,
      value: [],
      collectTags: props.collectTags
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange (value) {
    this.setState({
      value
    });

    let tags = [];

    value.forEach(function(tag) {
      tags.push(tag.TagSearchName);
    });

    this.state.collectTags(tags);
  }

  render() {
    return (
      <Select
        name="form-field-name"
        className="custom-scrollbar"
        multi={true}
        closeOnSelect={false}
        options={this.state.set}
        labelKey={"TagDisplayName"}
        valueKey={this.props.valueKey}
        value={this.state.value}
        onChange={this.handleSelectChange}
      />
    )
  }
}

TagInput.propTypes = {
  valueKey:PropTypes.string.isRequired,
  set: PropTypes.array.isRequired
};


export default TagInput;
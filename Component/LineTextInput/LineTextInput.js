import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import Color from "../../Color/Color";

export default function LineTextInput(props) {
  const { placeholder,autoFocus, onChangeText,value } = props;

  
  return (
    <TextInput
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={{ borderBottomColor: Color.Texttitle, borderBottomWidth: 2 }}
    />
  );
}
LineTextInput.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

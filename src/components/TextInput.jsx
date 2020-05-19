import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';

import { theme } from '../utils/constants';

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    justifyContent: 'center',
  },
  input: {
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: theme.color.mineShaft,
    color: theme.color.gallery,
    fontSize: 18,
  },
});

const TextInput = ({
  icon,
  placeholder,
  style,
  styleIcon,
  styleInput,
  value,
  onChange,
}) => (
  <View style={style}>
    {icon && (
      <View
        style={{
          ...styles.icon,
          ...styleIcon,
        }}
      >
        {icon}
      </View>
    )}
    <RNTextInput
      autoCorrect={false}
      placeholder={placeholder}
      placeholderTextColor={theme.color.mineShaft}
      selectionColor={theme.color.mineShaft}
      style={{
        ...styles.input,
        ...styleInput,
      }}
      value={value}
      onChange={onChange}
    />
  </View>
);

export default TextInput;

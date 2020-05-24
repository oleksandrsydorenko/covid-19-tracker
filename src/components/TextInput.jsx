import React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from '../utils/constants';

EStyleSheet.build({
  $galleryColor: theme.color.gallery,
  $mineShaftColor: theme.color.mineShaft,
});

const styles = EStyleSheet.create({
  icon: {
    position: 'absolute',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '$mineShaftColor',
    color: '$galleryColor',
    fontSize: wp(4),
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

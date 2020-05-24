import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';

import CloseIcon from '../assets/images/ic-close.svg';
import { theme } from '../utils/constants';

EStyleSheet.build({
  $codGrayColor: theme.color.codGray,
});

const styles = EStyleSheet.create({
  modal: {
    paddingTop: 46,
    backgroundColor: '$codGrayColor',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingRight: 35,
    paddingBottom: 35,
    paddingLeft: 35,
    backgroundColor: '$codGrayColor',
  },
});

const Modal = ({ children, isVisible, onClose }) => (
  <RNModal isVisible={isVisible}>
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={onClose}
        touchSoundDisabled
      >
        <CloseIcon />
      </TouchableOpacity>
      <View style={styles.content}>{children}</View>
    </View>
  </RNModal>
);

export default Modal;

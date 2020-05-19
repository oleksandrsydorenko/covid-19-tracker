import React from 'react';
import RNModal from 'react-native-modal';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import CloseIcon from '../assets/images/ic-close.svg';
import { theme } from '../utils/constants';

const styles = StyleSheet.create({
  modal: {
    paddingTop: 46,
    backgroundColor: theme.color.codGray,
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
    backgroundColor: theme.color.codGray,
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

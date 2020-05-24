import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNModal from 'react-native-modal';

import CloseIcon from '../assets/images/ic-close.svg';
import { theme } from '../utils/constants';

EStyleSheet.build({
  $codGrayColor: theme.color.codGray,
});

const styles = EStyleSheet.create({
  modal: {
    paddingTop: hp(3.5),
    backgroundColor: '$codGrayColor',
  },
  closeButton: {
    position: 'absolute',
    top: wp(1),
    right: wp(1),
    width: wp(6),
    height: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingRight: wp(8.5),
    paddingBottom: hp(3.5),
    paddingLeft: wp(8.5),
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
        <CloseIcon width={wp(4)} />
      </TouchableOpacity>
      <View style={styles.content}>{children}</View>
    </View>
  </RNModal>
);

export default Modal;

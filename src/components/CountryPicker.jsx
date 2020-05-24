import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import wrap from 'word-wrap';

import { Modal, Picker } from './';
import { system, theme } from '../utils/constants';

const formatCountry = country => country.split('-').join(' ').trim();

const wrapCountry = country =>
  wrap(formatCountry(country), {
    indent: '',
    newLine: '\n',
    width: 12,
  });

EStyleSheet.build({
  $galleryColor: theme.color.gallery,
});

const styles = EStyleSheet.create({
  button: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonLabel: {
    color: '$galleryColor',
    fontSize: wp(5),
    lineHeight: wp(9),
    textAlign: 'center',
  },
});

const CountryPicker = ({ country, countries, fetchStats }) => {
  const [isVisible, setVisibility] = useState(false);
  const wrappedValue = wrapCountry(
    country === system.DEFAULT_COUNTRY ? 'Select Country' : country,
  );

  const toggleModal = useCallback(() => {
    setVisibility(!isVisible);
  }, [isVisible]);
  const handlePick = useCallback(value => async () => fetchStats(value), [
    fetchStats,
  ]);

  return (
    <>
      <Modal isVisible={isVisible} onClose={toggleModal}>
        <Picker
          formatItem={formatCountry}
          items={['All', ...countries]}
          placeholder={'Type Country'}
          onPick={handlePick}
        />
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleModal}
        touchSoundDisabled
      >
        <Text style={styles.buttonLabel}>{wrappedValue}</Text>
      </TouchableOpacity>
    </>
  );
};

CountryPicker.defaultProps = {
  countries: [],
};

export default CountryPicker;

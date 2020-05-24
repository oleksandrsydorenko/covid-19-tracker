import React, { useCallback, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import SearchIcon from '../assets/images/ic-search.svg';
import { theme } from '../utils/constants';
import { TextInput } from './';

EStyleSheet.build({
  $galleryColor: theme.color.gallery,
});

const styles = EStyleSheet.create({
  filter: {
    marginBottom: hp(2),
  },
  filterIcon: {
    top: 0,
    bottom: 0,
  },
  filterInput: {
    paddingLeft: wp(10),
  },
  item: {
    marginTop: hp(0.2),
    marginBottom: hp(0.2),
    width: wp(50),
    alignSelf: 'flex-start',
  },
  itemLabel: {
    paddingTop: hp(0.9),
    paddingBottom: hp(0.9),
    color: '$galleryColor',
    fontSize: wp(4),
  },
  list: {
    alignSelf: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
  },
});

const Picker = ({
  formatItem,
  isFilterVisible,
  items,
  placeholder,
  onPick,
}) => {
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter),
  );
  const onChange = useCallback(({ nativeEvent: { text } }) => {
    setFilter(text);
  }, []);

  return (
    <View style={styles.picker}>
      {isFilterVisible && (
        <TextInput
          icon={<SearchIcon width={28} />}
          placeholder={placeholder}
          style={styles.filter}
          styleIcon={styles.filterIcon}
          styleInput={styles.filterInput}
          value={filter}
          onChange={onChange}
        />
      )}
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={onPick(item)}
            touchSoundDisabled
          >
            <Text style={styles.itemLabel}>{formatItem(item)}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
    </View>
  );
};

Picker.defaultProps = {
  isFilterVisible: true,
  items: [],
  formatItem: item => item,
};

export default Picker;

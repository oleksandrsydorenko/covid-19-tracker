import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SearchIcon from '../assets/images/ic-search.svg';
import { theme } from '../utils/constants';
import { TextInput } from './';

EStyleSheet.build({
  $galleryColor: theme.color.gallery,
});

const styles = EStyleSheet.create({
  filter: {
    marginBottom: 15,
  },
  filterIcon: {
    top: 0,
    bottom: 0,
  },
  filterInput: {
    paddingLeft: 40,
  },
  item: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    alignSelf: 'flex-start',
  },
  itemLabel: {
    paddingTop: 7,
    paddingBottom: 7,
    color: '$galleryColor',
    fontSize: 18,
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
    <ScrollView style={styles.picker}>
      {isFilterVisible && (
        <TextInput
          icon={<SearchIcon />}
          placeholder={placeholder}
          style={styles.filter}
          styleIcon={styles.filterIcon}
          styleInput={styles.filterInput}
          value={filter}
          onChange={onChange}
        />
      )}
      <View style={styles.list}>
        {filteredItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={onPick(item)}
            touchSoundDisabled
          >
            <Text style={styles.itemLabel}>{formatItem(item)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

Picker.defaultProps = {
  isFilterVisible: true,
  items: [],
  formatItem: item => item,
};

export default Picker;

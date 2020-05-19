import React, { useCallback, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SearchIcon from '../assets/images/ic-search.svg';
import { theme } from '../utils/constants';
import { TextInput } from './';

const styles = StyleSheet.create({
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
    color: theme.color.gallery,
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

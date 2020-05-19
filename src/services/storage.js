import AsyncStorage from '@react-native-community/async-storage';

import { log } from '../utils/helpers';

export const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    log({
      ['storage clear error']: e,
    });
  }
};

export const getItem = async key => {
  try {
    const item = await AsyncStorage.getItem(key);

    return JSON.parse(item);
  } catch (e) {
    log({
      ['storage getItem error']: e,
    });
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    log({
      ['storage removeItem error']: e,
    });
  }
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  } catch (e) {
    log({
      ['storage setItem error']: e,
    });
  }
};

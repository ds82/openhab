import { items } from 'openhab';

import { ItemName, Command, Item, ItemOrName, ChannelName } from './types';
import * as T from './types';

export const getItem = (itemName: ItemName): Item => {
  return items.getItem(itemName);
};

export const exists = (itemName: ItemName): boolean => {
  try {
    return getItem(itemName) && true;
  } catch (e) {
    return false;
  }
};

export const getState = (itemName: ItemName): string => {
  return items.getItem(itemName)?.state ?? '';
};

export const sendCommand = <T = Command>(itemName: ItemName, command: T) => {
  items.getItem(itemName)?.sendCommand(command as string);
};

export const getChannelValue = (channel: ChannelName) => {
  return '';
};

export const is = <T = string>(itemName: ItemName, state: T) => {
  return getState(itemName) === state;
};

export const isOn = (itemName: ItemName): boolean => {
  return is(itemName, T.SwitchState.ON);
};

export const isOff = (itemName: ItemName): boolean => {
  return is(itemName, T.SwitchState.OFF);
};

export const forceOn = (itemName: ItemName): void => {
  sendCommand(itemName, T.SwitchState.ON);
};

export const forceOff = (itemName: ItemName): void => {
  sendCommand(itemName, T.SwitchState.OFF);
};

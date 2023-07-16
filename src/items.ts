/**
 * @module items
 */
import { items } from 'openhab';

import {
  ItemName,
  Command,
  Update,
  Item,
  ItemOrName,
  ChannelName,
} from './types';
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

/**
 * Sends an update to an item
 */
export const postUpdate = <T = Update>(itemName: ItemName, update: T) => {
  items.getItem(itemName)?.postUpdate(update as string);
};

export const getChannelValue = (channel: ChannelName) => {
  return '';
};

export const is = <T = string>(itemName: ItemName, state: T) => {
  return String(getState(itemName)) === String(state);
};

export const historicState = (
  itemName: ItemName,
  date: Date /*T.Datelike*/
) => {
  return items.getItem(itemName)?.history?.historicState(date);
};

/**
 * Checks if a switch item has the state "ON"
 * @param itemName - The name of the item
 * @returns boolean
 */
export const isOn = (itemName: ItemName): boolean => {
  return is(itemName, T.SwitchState.ON);
};

export const isOff = (itemName: ItemName): boolean => {
  return is(itemName, T.SwitchState.OFF);
};

export const isClosed = (itemName: ItemName): boolean => {
  return is(itemName, T.ContactState.CLOSED);
};

export const isOpen = (itemName: ItemName): boolean => {
  return is(itemName, T.ContactState.OPEN);
};

export const forceOn = (itemName: ItemName): void => {
  sendCommand(itemName, T.SwitchState.ON);
};

export const forceOff = (itemName: ItemName): void => {
  sendCommand(itemName, T.SwitchState.OFF);
};

export const on = (itemName: ItemName): void => {
  if (isOff(itemName)) {
    sendCommand(itemName, T.SwitchState.ON);
  }
};
export const off = (itemName: ItemName): void => {
  if (isOn(itemName)) {
    sendCommand(itemName, T.SwitchState.OFF);
  }
};

/**
 * Sends OPEN command to a contactItem if it is closed
 */
export const open = (itemName: T.ContactItemName): void => {
  if (isClosed(itemName)) {
    forceOpen(itemName);
  }
};

/**
 * Sends CLOSED command to a contactItem if it is open
 */
export const close = (itemName: T.ContactItemName): void => {
  if (isOpen(itemName)) {
    forceClose(itemName);
  }
};

/**
 * Sends OPEN command to a contactItem no matter its state
 */
export const forceOpen = (itemName: T.ContactItemName): void => {
  postUpdate(itemName, T.ContactState.OPEN);
};

/**
 * Sends CLOSED command to a contactItem no matter its state
 */
export const forceClose = (itemName: T.ContactItemName): void => {
  postUpdate(itemName, T.ContactState.CLOSED);
};

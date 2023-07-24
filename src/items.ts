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

import { ensureArray, map, ap } from './utils';

export const getItem = (itemName: ItemName): Item | null => {
  return items.getItem(itemName, true);
};

export const getMembers = (groupName: ItemName): Item[] | null => {
  return getItem(groupName)?.members ?? null;
};

export const exists = (itemName: ItemName): boolean => {
  return getItem(itemName) !== null;
};

export const getState = (itemName: ItemName): string | number => {
  const item = items.getItem(itemName);
  return item?.numericState ?? item?.state ?? '';
};

/**
 * Sends a command to the specified item
 * @param itemName - The name of the item
 * @command command - The command to send
 */
export const sendCommand = <T = Command>(itemName: ItemName, command: T) => {
  items.getItem(itemName)?.sendCommand(command as string);
};

/**
 * Sends an update to an item
 */
export const postUpdate = <T = Update>(itemName: ItemName, update: T) => {
  items.getItem(itemName)?.postUpdate(update as string);
};

/**
 * @hidden
 */
export const getChannelValue = (channel: ChannelName) => {
  return '';
};

export const is = <T = string>(itemName: ItemName, state: T) => {
  return String(getState(itemName)) === String(state);
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

/**
 * Toogles the state of an item
 * @param itemName - The name of the item
 * @returns null if item does not exist or has no tgoggle value
 */
export const toggle = (itemName: ItemName): void | null => {
  const togglValue = getItem(itemName)?.getToggleState() ?? null;
  return togglValue !== null ? sendCommand(itemName, togglValue) : null;
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

/**
 * Sends OFF command to a switchItem if it is on
 * @param itemName - The name of the item
 */
export const off = (itemName: ItemName): void => {
  if (isOn(itemName)) {
    sendCommand(itemName, T.SwitchState.OFF);
  }
};

/**
 * Sends OPEN command to a contactItem if it is closed
 * @param itemName - The name of the item
 *
 */
export const open = (itemName: T.ContactItemName): void => {
  if (isClosed(itemName)) {
    forceOpen(itemName);
  }
};

/**
 * Sends CLOSED command to a contactItem if it is open
 * @param itemName - The name of the item
 */
export const close = (itemName: T.ContactItemName): void => {
  if (isOpen(itemName)) {
    forceClose(itemName);
  }
};

/**
 * Sends OPEN command to a contactItem no matter its state
 */
const forceOpen = (itemName: T.ContactItemName): void => {
  postUpdate(itemName, T.ContactState.OPEN);
};

/**
 * Sends CLOSED command to a contactItem no matter its state
 */
export const forceClose = (itemName: T.ContactItemName): void => {
  postUpdate(itemName, T.ContactState.CLOSED);
};

export const up = (itemName: T.RollershutterItemName, value = 0): void => {
  const state = getState(itemName) as number;
  if (state > value) {
    sendCommand(itemName, value);
  }
};

export const down = (itemName: T.RollershutterItemName, value = 100): void => {
  const state = getState(itemName) as number;
  if (value > state) {
    sendCommand(itemName, value);
  }
};

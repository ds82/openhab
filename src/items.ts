const { items } = require("openhab");

import { ItemName, Command, Item, ItemOrName, ChannelName } from "./types";

export const getItem = (itemName: ItemName): Item => {
  return items.getItem(itemName);
};

export const exists = (itemName: ItemName): boolean => {
  try {
    return getItem(itemName) && true;
  } catch(e) {
    return false;
  }
}

export const getState = (itemName: ItemName): string => {
  return items.getItem(itemName).state;
};

export const sendCommand = (itemName: ItemName, command: Command) => {
  items.getItem(itemName).sendCommand(command);
};

export const getChannelValue = (channel: ChannelName) => {}

export const isOn = (itemName: ItemName): boolean => {
  return false;
}

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

export const averageBetween = (itemName: ItemName, begin: Date, end: Date) => {
  return items.getItem(itemName)?.history?.averageBetween(begin, end);
};

export const historicState = (
  itemName: ItemName,
  date: Date /*T.Datelike*/
) => {
  return items.getItem(itemName)?.history?.historicState(date);
};

export const historicValue = (
  itemName: ItemName,
  date: Date /*T.Datelike*/
) => {
  return historicState(itemName, date)?.state;
};

export const sumSince = (itemName: ItemName, date: Date /*T.Datelike*/) => {
  return items.getItem(itemName)?.history?.sumSince(date);
};

export const averageSince = (itemName: ItemName, date: Date /*T.Datelike*/) => {
  return items.getItem(itemName)?.history?.averageSince(date);
};

export const minimumSince = (itemName: ItemName, date: Date /*T.Datelike*/) => {
  return items.getItem(itemName)?.history?.minimumSince(date);
};

export const lastUpdate = (itemName: ItemName): unknown => {
  return items.getItem(itemName)?.history?.lastUpdate();
};

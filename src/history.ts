/**
 * @module items
 */
import { items } from 'openhab';
const { DayOfWeek, LocalDateTime } = require('@js-joda/core');

import {
  ItemName,
  Command,
  Update,
  Item,
  ItemOrName,
  ChannelName,
} from './types';
import * as T from './types';
import { getItem } from './items';
import { now } from './datefns';
import { subISOWeekYears } from 'date-fns/esm';

const getHistoryItem = (itemName: ItemName) => {
  const item = items.getItem(itemName) as any;
  return item?.history || item?.persistence;
};

export const averageBetween = (itemName: ItemName, begin: Date, end: Date) => {
  return getHistoryItem(itemName)?.averageBetween(begin, end);
};

export const historicState = (
  itemName: ItemName,
  date: Date /*T.Datelike*/
) => {
  return getHistoryItem(itemName)?.historicState(date);
};

export const historicValue = (
  itemName: ItemName,
  date: Date /*T.Datelike*/
) => {
  return historicState(itemName, date)?.state;
};

export const sumSince = (itemName: ItemName, date: Date /*T.Datelike*/) => {
  return getHistoryItem(itemName)?.sumSince(date);
};

export const averageSince = (itemName: ItemName, date: Date /*T.Datelike*/) => {
  return getHistoryItem(itemName)?.averageSince(date);
};

export const minimumSince = (itemName: ItemName, date: Date /*T.Datelike*/) => {
  return getHistoryItem(itemName)?.minimumSince(date);
};

export const lastUpdate = (itemName: ItemName): unknown => {
  return getHistoryItem(itemName)?.lastUpdate();
};

export const changedBetween = (
  itemName: ItemName,
  start: Date,
  end: Date
): unknown => {
  return getHistoryItem(itemName)?.changedBetween(start, end);
};

export const getAllStatesBetween = (
  itemName: ItemName,
  start: Date,
  end: Date,
  serviceId: string
): { state: string | number | boolean; timestamp: Date }[] => {
  return (
    getHistoryItem(itemName)?.getAllStatesBetween(start, end, serviceId) || []
  );
};

export const whenItemChangedTo = (
  itemName: ItemName,
  state: string | number | boolean,
  start: Date,
  end: Date,
  serviceId = ''
): Date => {
  const s = start || now().withHour(0).withMinute(0);
  const e = end || now().withHour(23).withMinute(59);

  const ts = getAllStatesBetween(itemName, s, e, serviceId)
    .reverse()
    .find((i) => i.state === state)?.timestamp;

  const [ts2, ..._rest] = String(ts).split('+');

  return LocalDateTime.parse(ts2);
};

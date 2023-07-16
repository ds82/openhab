import {
  format,
  parseISO,
  formatISO,
  isSameDay,
  add,
  getDay,
  isBefore,
  isAfter,
} from 'date-fns';
import { getItem } from './items';

import type { ItemName, DateTimeItemName, Datelike } from './types';

const DEFAULT_FORMAT = 'dd.MM.yyyy HH:mm:ss';

export { isSameDay };

export const getFormatedDate = (datetime: Datelike) => {
  return format(datetime, DEFAULT_FORMAT);
};

export const datetime = () => {
  return getFormatedDate(Date.now());
};

export const dateFromItem = (item: ItemName) => {
  return parseISO(getItem(item).state);
};

export const isDayBefore = (day1: Datelike, day2: Datelike) => {
  return isSameDay(day1, add(day2, { days: 1 }));
};

export const isWorkDay = (day: Datelike) => {
  const d = getDay(day);
  return d > 0 && d < 6;
};

/**
 * Checks whether the DateTime state of the given item is before the given date or now() if no date is given
 *  @param item - The name of the DateTime item
 *  @param when - The date to compare with (optional)
 *  @returns boolean
 */
export const isBeforeItem = (item: DateTimeItemName, when = Date.now()) => {
  const state = dateFromItem(item);
  return isBefore(when, state);
};

export const isAfterItem = (item: DateTimeItemName, when = Date.now()) => {
  const state = dateFromItem(item);
  return isAfter(when, state);
};

export const isBetween = (
  start: Datelike,
  end: Datelike,
  when: Datelike = Date.now()
) => {
  return isAfter(when, start) && isBefore(when, end);
};

/*

function isOlderThanSeconds(d1, d2, secs) {
  var m1 = moment(d1);
  var m2 = moment(d2);
  return m1.diff(m2, "seconds") > secs;
}

function isBetweenHourOfDay(hour1, hour2) {
  var hourNow = moment().get("hour");
  return hour1 <= hourNow && hourNow <= hour2;
}

function isTomorrow(dateTimeItem) {
  var d = momentFromItem(dateTimeItem);
  var tomorrow = moment(DateTime.now()).add(1, "days");

  return d.isSame(tomorrow, "days");
}

function diffSeconds(d1, d2) {
  return Math.abs(moment(d1).diff(d2, "seconds"));
}

function isBetween(_start, _end, _now) {
  var now = _now ? moment(_now) : moment();
  var startMoment = moment(_start);
  var endMoment = moment(_end);

  var isBeforeTwelve = now.hour() <= 12;
  var isEndBeforeStart = endMoment.isBefore(startMoment);

  var start =
    isEndBeforeStart && isBeforeTwelve
      ? startMoment.subtract(1, "day")
      : startMoment;
  var end =
    isEndBeforeStart && !isBeforeTwelve ? endMoment.add(1, "day") : endMoment;

  return now.isBetween(start, end);
}
*/

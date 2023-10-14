import { triggers } from 'openhab';
import { ItemState, ItemName, ChannelName, ChannelEvent } from './types';
import { getItem } from './items';

export const timeTrigger = (cronExpression: string, triggerName?: string) =>
  triggers.GenericCronTrigger(cronExpression, triggerName);

export const changeStateTrigger = (
  itemName: ItemName,
  newState: ItemState,
  oldState: ItemState
) => triggers.ItemStateChangeTrigger(itemName, oldState, newState);

export const updateStateTrigger = (
  itemName: ItemName,
  newState: ItemState,
  triggerName?: string
) => triggers.ItemStateUpdateTrigger(itemName, newState, triggerName);

export const channelTrigger = (
  channel: ChannelName,
  event: ChannelEvent,
  triggerName?: string
) => triggers.ChannelEventTrigger(channel, event, triggerName);

export const commandTrigger = (itemName: ItemName, event: ItemState) =>
  triggers.ItemCommandTrigger(itemName, event);

const groupTrigger =
  (fn: (...args: any[]) => unknown) =>
  (groupName: ItemName, from: ItemState, to: ItemState) => {
    return getItem(groupName)?.members?.map((item) => {
      return fn(item.name, from, to);
    });
  };

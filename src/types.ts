const { ON, OFF } = require("@runtime");

export type RuleExecuteFn = (event: unknown) => void;

export type Trigger = any;

export type ChannelName = string;
export type ChannelEvent = string;

export type Item = {};
export type ItemName = string;
export type ItemOrName = Item | string;

export type Command = string;

export enum SwitchState {
  ON,
  OFF,
}

export type ItemState = SwitchState;

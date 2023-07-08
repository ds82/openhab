const { ON: _ON, OFF: _OFF } = require('@runtime');

export type RuleExecuteFn = (event: unknown) => void;

export type Trigger = any;

export type ChannelName = string;
export type ChannelEvent = string;

export type Item = any;
// export type ItemName = string;

export type CallItemName = string;
export type ColorItemName = string;
export type ContactItemName = string;
export type DateTimeItemName = string;
export type DimmerItemName = string;
export type GroupItemName = string;
export type ImageItemName = string;
export type LocationItemName = string;
export type NumberItemName = string;
export type PlayerItemName = string;
export type RollershutterItemName = string;
export type StringItemName = string;
export type SwitchItemName = string;

export type ItemName =
  | CallItemName
  | ColorItemName
  | ContactItemName
  | DateTimeItemName
  | DimmerItemName
  | GroupItemName
  | ImageItemName
  | LocationItemName
  | NumberItemName
  | PlayerItemName
  | RollershutterItemName
  | StringItemName
  | SwitchItemName;

export type ItemOrName = Item | string;

export type Command = string;

export const ON = _ON;
export const OFF = _OFF;
export enum SwitchState {
  ON = _ON,
  OFF = _OFF,
}
export enum ContactState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export type ItemState = string | undefined;

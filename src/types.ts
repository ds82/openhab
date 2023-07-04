const { ON: _ON, OFF: _OFF } = require('@runtime');

export type RuleExecuteFn = (event: unknown) => void;

export type Trigger = any;

export type ChannelName = string;
export type ChannelEvent = string;

export type Item = any;
export type ItemName = string;
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

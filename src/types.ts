const {
  ON: _ON,
  OFF: _OFF,
  OPEN: _OPEN,
  CLOSED: _CLOSED,
} = require('@runtime');

export type RuleExecuteFn = (event: unknown) => void;

export type Trigger = any;

export type ChannelName = string;
export type ChannelEvent = string;

export type RawItem = any;
export type RawItemState = any;
export type ItemHistory = any;
export type ItemSemantics = any;
export type Quantity = any;

export type Item = {
  rawItem: RawItem;
  history: ItemHistory;
  semantics: ItemSemantics;
  type: string;
  name: string;
  label: string;
  state: string;
  numericState: number;
  quantityState: Quantity | null;
  rawState: RawItemState;
  members: Item[];
  descendents: Item[];
  isUninitialized: boolean;
  groupNames: string[];
  tags: string[];
  // TODO: metadata
  sendCommand: (command: Command) => void;
  getToggleState: () => string;
};
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
export type Update = string;

export const ON = 'ON';
export const OFF = 'OFF';
export enum SwitchState {
  ON = _ON,
  OFF = _OFF,
}

export const OPEN = 'OPEN';
export const CLOSED = 'CLOSED';
export enum ContactState {
  OPEN = _OPEN,
  CLOSED = _CLOSED,
}

export type ItemState = string | SwitchState | ContactState | undefined;

export type Datelike = Date | number;

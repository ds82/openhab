declare module "types" {
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
        sendCommand: (command: Command) => void;
        getToggleState: () => string;
    };
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
    export type ItemName = CallItemName | ColorItemName | ContactItemName | DateTimeItemName | DimmerItemName | GroupItemName | ImageItemName | LocationItemName | NumberItemName | PlayerItemName | RollershutterItemName | StringItemName | SwitchItemName;
    export type ItemOrName = Item | string;
    export type Command = string;
    export type Update = string;
    export const ON: any;
    export const OFF: any;
    export enum SwitchState {
        ON,
        OFF
    }
    export const OPEN: any;
    export const CLOSED: any;
    export enum ContactState {
        OPEN,
        CLOSED
    }
    export type ItemState = string | undefined;
    export type Datelike = Date | number;
}
declare module "utils" {
    export const ensureArray: <T = unknown>(value: T | T[]) => T[];
    export const map: <T, S>(fn: (value: T, ...args: unknown[]) => S, list: T | T[], args?: unknown[]) => S[];
    export const ap: <T = void, S = unknown>(fn: (item: string, value: S) => T, value: S) => (item: string) => T;
}
declare module "items" {
    import { ItemName, Item, ChannelName } from "types";
    import * as T from "types";
    export const getItem: (itemName: ItemName) => Item | null;
    export const getMembers: (groupName: ItemName) => Item[] | null;
    export const exists: (itemName: ItemName) => boolean;
    export const getState: (itemName: ItemName) => string | number;
    /**
     * Sends a command to the specified item
     * @param itemName - The name of the item
     * @command command - The command to send
     */
    export const sendCommand: <T = string>(itemName: ItemName, command: T) => void;
    /**
     * Sends an update to an item
     */
    export const postUpdate: <T = string>(itemName: ItemName, update: T) => void;
    /**
     * @hidden
     */
    export const getChannelValue: (channel: ChannelName) => string;
    export const is: <T = string>(itemName: ItemName, state: T) => boolean;
    /**
     * Checks if a switch item has the state "ON"
     * @param itemName - The name of the item
     * @returns boolean
     */
    export const isOn: (itemName: ItemName) => boolean;
    export const isOff: (itemName: ItemName) => boolean;
    export const isClosed: (itemName: ItemName) => boolean;
    export const isOpen: (itemName: ItemName) => boolean;
    /**
     * Toogles the state of an item
     * @param itemName - The name of the item
     * @returns null if item does not exist or has no tgoggle value
     */
    export const toggle: (itemName: ItemName) => void | null;
    export const forceOn: (itemName: ItemName) => void;
    export const forceOff: (itemName: ItemName) => void;
    export const on: (itemName: ItemName) => void;
    /**
     * Sends OFF command to a switchItem if it is on
     * @param itemName - The name of the item
     */
    export const off: (itemName: ItemName) => void;
    /**
     * Sends OPEN command to a contactItem if it is closed
     * @param itemName - The name of the item
     *
     */
    export const open: (itemName: T.ContactItemName) => void;
    /**
     * Sends CLOSED command to a contactItem if it is open
     * @param itemName - The name of the item
     */
    export const close: (itemName: T.ContactItemName) => void;
    /**
     * Sends CLOSED command to a contactItem no matter its state
     */
    export const forceClose: (itemName: T.ContactItemName) => void;
    export const up: (itemName: T.RollershutterItemName, value?: number) => void;
    export const down: (itemName: T.RollershutterItemName, value?: number) => void;
}
declare module "datefns" {
    import { isSameDay } from 'date-fns';
    import type { ItemName, DateTimeItemName, Datelike } from "types";
    export { isSameDay };
    export const getFormatedDate: (datetime: Datelike) => string;
    export const datetime: () => string;
    export const dateFromItem: (item: ItemName) => Date;
    export const isDayBefore: (day1: Datelike, day2: Datelike) => boolean;
    export const isWorkDay: (day: Datelike) => boolean;
    /**
     * Checks whether the DateTime state of the given item is before the given date or now() if no date is given
     *  @param item - The name of the DateTime item
     *  @param when - The date to compare with (optional)
     *  @returns boolean
     */
    export const isBeforeItem: (item: DateTimeItemName, when?: number) => boolean;
    export const isAfterItem: (item: DateTimeItemName, when?: number) => boolean;
    export const isBetween: (start: Datelike, end: Datelike, when?: Datelike) => boolean;
}
declare module "history" {
    import { ItemName } from "types";
    export const averageBetween: (itemName: ItemName, begin: Date, end: Date) => number | null | undefined;
    export const historicState: (itemName: ItemName, date: Date) => import("openhab/types/items/item-history").HistoricItem | null | undefined;
    export const sumSince: (itemName: ItemName, date: Date) => number | null | undefined;
    export const averageSince: (itemName: ItemName, date: Date) => number | null | undefined;
    export const minimumSince: (itemName: ItemName, date: Date) => import("openhab/types/items/item-history").HistoricItem | null | undefined;
    export const lastUpdate: (itemName: ItemName) => unknown;
}
declare module "triggers" {
    import { ItemState, ItemName, ChannelName, ChannelEvent } from "types";
    export const timeTrigger: (cronExpression: string, triggerName?: string) => object;
    export const changeStateTrigger: (itemName: ItemName, newState: ItemState, oldState: ItemState) => object;
    export const updateStateTrigger: (itemName: ItemName, newState: ItemState, triggerName?: string) => object;
    export const channelTrigger: (channel: ChannelName, event: ChannelEvent, triggerName?: string) => object;
    export const commandTrigger: (itemName: ItemName, event: ItemState) => object;
}
declare module "index" {
    /** @ignore */
    import { ItemName, RuleExecuteFn, Trigger } from "types";
    export * as items from "items";
    export * as triggers from "triggers";
    export * as datefns from "datefns";
    export * from "items";
    export * from "history";
    export * from "triggers";
    export * from "datefns";
    /**
     * This function adds rules to the engine
     *
     * @example
     * ```ts
     * addRule(
     *   "Gedimmte Beleuchtung OG Flur um 19.30 Uhr",
     *   function () {
     *     forceOn("Upstairs_Floor_Nightmode");
     *   },
     *   [timeTrigger("0 30 19 ? * *")]
     * );
     * ```
     */
    export const addRule: (name: ItemName, execute: RuleExecuteFn, triggers: Trigger[], _other?: {
        description: string;
    }) => object;
}

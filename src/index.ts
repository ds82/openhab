/** @ignore */
import { ItemName, RuleExecuteFn, Trigger } from './types';

import { rules, triggers } from 'openhab';

export * as items from './items';
export * as triggers from './triggers';
export * as datefns from './datefns';

export * from './items';
export * from './history';
export * from './triggers';
export * from './datefns';

const ruleDefaultOther = {
  description: '',
};

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
export const addRule = (
  name: ItemName,
  execute: RuleExecuteFn,
  triggers: Trigger[],
  _other = ruleDefaultOther
) => {
  const other = { ...ruleDefaultOther, ..._other };
  return rules.JSRule({
    name,
    description: other.description,
    triggers,
    execute,
  });
};

import { ItemName, RuleExecuteFn, Trigger } from './types';

import { rules, triggers } from 'openhab';

export * as items from './items';
export * as triggers from './triggers';
export * as datefns from './datefns';

const ruleDefaultOther = {
  description: '',
};

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

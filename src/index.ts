import { ItemName, RuleExecuteFn, Trigger } from "./types";

const { rules, triggers } = require("openhab");

export * from "./items";
export * from "./triggers";

const ruleDefaultOther = {
  description: "",
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

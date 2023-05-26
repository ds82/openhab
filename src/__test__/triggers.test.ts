import { triggers } from 'openhab';
jest.mock('openhab');

import * as uut from '../triggers';

test('timeTrigger should call GenericCronTrigger', () => {
  const cronExp = '0 1 3';
  const triggerName = 'some-trigger';
  uut.timeTrigger(cronExp, triggerName);
  expect(triggers.GenericCronTrigger).toHaveBeenCalledWith(
    cronExp,
    triggerName
  );
});

import * as uut from '../utils';
import * as items from '../items';

jest.mock('../items');

// Thu May 11 2023 22:31:45 GMT+0200 (Central European Summer Time)
const TEST_DATE = 1683837105142;
const AS_ISO = '2023-05-11T20:31:45.142Z';

const mockedItems = jest.mocked(items);

describe('getFormatedDate', () => {
  test('should return formated date from timestamp', () => {
    expect(uut.getFormatedDate(TEST_DATE)).toEqual('11.05.2023 22:31:45');
  });

  test('should return formated date from Date', () => {
    expect(uut.getFormatedDate(new Date(TEST_DATE))).toEqual(
      '11.05.2023 22:31:45'
    );
  });
});

describe('dateFromItem', () => {
  test('should return Date() instance from item state', () => {
    mockedItems.getItem.mockImplementation(() => ({ state: AS_ISO }));
    expect(uut.dateFromItem('abc')).toEqual(new Date(TEST_DATE));
  });
});

describe('isBeforeItem', () => {

  // it('should return true if now is before timestamp in given item', () => {})

  // it('should return false if now is after timestamp in given item', () => {})



});

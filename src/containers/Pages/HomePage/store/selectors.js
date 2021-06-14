import { createSelector } from 'reselect';
import { initialDictionaryState } from './reducer';

const selectDictionaries = state => state.dictionaries || initialDictionaryState;

const testDataSelector = () =>
  createSelector(
    selectDictionaries,
    state => state.data,
  );

export { testDataSelector };

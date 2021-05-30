import { createSelector } from 'reselect';
import { initialDictionaryState } from './reducer';

const selectDictionaries = state =>
  state.dictionaries || initialDictionaryState;

const sexListSelector = () =>
  createSelector(
    selectDictionaries,
    state => state.sexes,
  );

export { sexListSelector };

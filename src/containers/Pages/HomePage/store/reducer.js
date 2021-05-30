import produce from 'immer';
import { GET_SEXES_DICTIONARY_SUCCESS } from './constants';
export const initialDictionaryState = {
  sexes: [],
};

/* eslint-disable default-case, no-param-reassign */
const DictionaryReducer = (state = initialDictionaryState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    // console.log('action', action);
    switch (action.type) {
      case GET_SEXES_DICTIONARY_SUCCESS:
        draft.sexes = action.dictionary;
        break;
    }
  });

export { DictionaryReducer };

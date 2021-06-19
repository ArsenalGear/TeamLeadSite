import produce from 'immer';
import { GET_MENU_DATA_SUCCESS } from './constants';
export const initialDictionaryState = {
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const DictionaryReducer = (state = initialDictionaryState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    // console.log('action', action);
    switch (action.type) {
      case GET_MENU_DATA_SUCCESS:
        draft.data = action.dictionary;
        break;
    }
  });

export { DictionaryReducer };

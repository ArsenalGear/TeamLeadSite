// import produce from 'immer';
// import { LOADER_START, LOADER_STOP, CLEAR_ERROR } from '../constants';
//
// export const initialStatePreloader = {
//   loading: false,
// };
// export const initialStateError = {
//   errorData: null,
// };
//
// /* eslint-disable default-case, no-param-reassign */
// export const PreloaderReducer = (state = initialStatePreloader, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case LOADER_START:
//         draft.loading = true;
//         break;
//       case LOADER_STOP:
//         draft.loading = false;
//         break;
//     }
//   });
//
// // eslint-disable-next-line consistent-return
// export const errorReducer = (state = initialStateError, action) => {
//   const { type, error } = action;
//   const matches = /(.*)_(SUCCESS|FAILED|ERROR)/.exec(type);
//   if (!matches) return state;
//   const [, , requestState] = matches;
//
//   if (requestState === 'FAILED') {
//     return {
//       ...state,
//       errorData: { ...error.response.data },
//     };
//   }
//   return produce(state, draft => {
//     switch (action.type) {
//       case CLEAR_ERROR:
//         draft.errorData = null;
//         break;
//     }
//   });
// };

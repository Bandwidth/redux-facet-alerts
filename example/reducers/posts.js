import { handleActions } from 'redux-actions';
import { alertViewReducer } from '../../src/immutable';
import actions from '../actions/posts';
import { fromJS } from 'immutable';

const baseReducer = handleActions(
  {
    [actions.edit]: (state, { payload: { draft } }) =>
      state.set('draft', draft),
    [actions.create.pending]: state => state.set('loading', true),
    [actions.create.complete]: (state, { payload: { post } }) =>
      state.set('draft', '').set('loading', false),
    [actions.create.failed]: state => state.set('loading', false),
  },
  fromJS({ loading: false, draft: '' }),
);

export default alertViewReducer.mount(baseReducer);

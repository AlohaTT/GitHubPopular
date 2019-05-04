import Types from '../../action/types';

const DEFAULT_STATE = 'blue';
export default function onAction(state = DEFAULT_STATE, action) {
  switch (action.type) {
  case Types.THEME_CHANGE:
    return { ...state, theme: action.theme, };

  default:
    return DEFAULT_STATE || state;
  }
}
'use strict';

export function source(state = '', action) {
  if (action.type === 'SOURCE_TEXT_CHANGE') {
    return action.source;
  } else {
    return state;
  }
}
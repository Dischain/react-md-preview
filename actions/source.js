'use strict';

export function source(value) {
  return {
    type: 'SOURCE_TEXT_CHANGE',
    source: value
  };
}

export function sourceChange(event) {
  return (discpatch) => {
    discpatch(source(event.target.value));
  };
}
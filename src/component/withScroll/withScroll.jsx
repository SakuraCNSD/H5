import React from 'react';
export default function withScroll(Comp) {
  return function rollToZero(props) {
    window.scrollTo(0, 0);
    return <Comp {...props} />;
  };
}

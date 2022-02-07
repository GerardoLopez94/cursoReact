import React, { memo }from 'react';

const Small = memo(({value}) => {
    console.log('Me volví a mostar');
  return (
    <small>{value}</small>
  );
});

export { Small };

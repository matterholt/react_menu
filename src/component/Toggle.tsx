import React from 'react';

function Toggle(props) {
  const { label } = props;
  return (
    <label>
      <input type="checkbox" />
      <span />
      <strong>{label}</strong>
    </label>
  );
}

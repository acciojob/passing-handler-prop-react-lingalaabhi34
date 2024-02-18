import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  console.log(selectNextBackground);
  return (
    <button className={props.class} onClick={() => selectNextBackground({background: background})}>
      {props.label}  
      
    </button>
  )
}
export default ColourSelector;

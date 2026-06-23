import React from 'react'

function Mainlayout(props) {
   const { children } = props;
  
  return (
    <>
	    <div>{children}</div>
    </>
  );
}


export default Mainlayout
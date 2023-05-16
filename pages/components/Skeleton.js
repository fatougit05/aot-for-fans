import React from "react";
const Skeleton = ({ width, height, borderRadius , backgroundColor, marginTop,marginLeft}) => {
 
  return (
   <div>
  
 <div className='loading'
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
        marginTop,
    marginLeft,
      }}

    >

    </div>
   </div>

    
   
  );
};

 

export default Skeleton;
import React from 'react';
import  Tooltip from '@mui/material/Tooltip';
import MonoTypeEffect from '../typeEffect/MonoTypeEffect';
import DualTypeEffect from '../typeEffect/DualTypeEffect';


const TypeToolTip = ({type1, type2}) => {
    var typeText1 = "/types/" +type1 + ".png";
    console.log(type1);
    if (type2) {
      var typeText2 = "/types/" + type2 + ".png";
      
      return (<>
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<DualTypeEffect type1={type1} type2={type2} />}>
          <img style={{ marginLeft: '60px' }} src={typeText1} alt={type1} width="100px" />
        </Tooltip>
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<DualTypeEffect type1={type1} type2={type2} />}>
          <img src={typeText2} alt={type2} width="100px" />
        </Tooltip>

      </>)
    }

    return (
      <Tooltip
        disableFocusListener
        disableTouchListener
        title={<MonoTypeEffect type1={type1} />}>
        <img style={{ marginLeft: '120px' }} src={typeText1} alt={type1} width="100px" />
      </Tooltip>)
  }

  export default TypeToolTip;

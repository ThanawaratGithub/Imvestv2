import { useEffect, useState } from 'react'
import p11 from '../assets/1.1.png'
import p12 from '../assets/1.2.png'
import p13 from '../assets/1.3.png'
import p21 from '../assets/2.1.png'
import p22 from '../assets/2.2.png'
import p23 from '../assets/2.3.png'
import p31 from '../assets/3.1.png'
import p32 from '../assets/3.2.png'
import p33 from '../assets/3.3.png'

const picarr = [p11,p12,p13,p21,p22,p23,p31,p32,p33];
function Servicecard(props){
    console.log(props)
    console.log(props.val)
    const [picid,setpicid] = useState(props.val.picid);
    const [subword1,setsubword1] = useState(props.val.subword1);
    const [subword2,setsubword2] = useState(props.val.subword2);
    const [tail , settail] = useState(props.val.tail);
return (<>        <div className="pictop">
    <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'33px'}}>
<img src={picarr[picid]} style={{height:'127px',width:'120px'}}></img>
</div>
<div className='pictop_text_group'>
<div className="pictop_text" style={{marginTop:'10px',marginBottom:'10px'}}>
  <div
    style={{
      width: "15px",
      height: "15px",
      background: "#114940",
    }}
  ></div>
  {subword1}
</div>
<div className="pictop_text">
  <div
    style={{
      width: "15px",
      height: "15px",
      background: "#114940",
    }}
  ></div>
  {subword2}
</div>
</div>
<div className="picbot"><div className="picbot_text">{tail}</div></div>
</div></>)




}
export default Servicecard;
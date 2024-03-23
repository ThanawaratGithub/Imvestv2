import './Card.css'
import tail from '../assets/ar_tail.png'
function Card(){

return (<>
       <div className="card_container">
          <div className="card" style={{position:'relative'}}>
            <div className="card_pic"></div>
            <div className="card_desc">
              <div className="card_text" style={{direction:'ltr'}}>
               SME 101 : เคล็ด(ไม่)ลับ
              <div>สำหรับมือใหม่ลงสนาม
              </div></div>
              <div className="card_tail"><img src={tail}></img></div>
            </div>
          </div>
        </div>

</>)




}

export default Card;
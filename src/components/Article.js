import React from 'react';
import './ArticleCard.css';

const content = [
  "ตัวอย่าง Framework การคิด Marketing Campaign",
  "ในการคิด campaign การวิเคราะห์ธุรกิจให้รอบด้านเป็นสิ่งสำคัญ ผ่านการวิเคราะห์โครงสร้าง 3 กลุ่ม ได้เเก่ Target Persona, Customer Value Proposition หรือ CVP เเละ Marketing Objective",
  "เริ่มจากการเข้าใจลูกค้าผ่านการคิดในมุมมอง stakeholders ที่เกี่ยวข้อง ทำให้เข้าใจลูกค้ามากขึ้น เเละการออกเเบบ marketing strategies ตรงจุดกับชีวิตของลูกค้า ประกอบไปด้วย",
  "Company เพื่อให้ทราบธุรกิจเเละนำเสนอจุดเด่นของเเบรนด์ได้ดียิ่งขึ้น",
  "Partner ซึ่งเป็นส่วนประกอบสำคัญของธุรกิจในการดำเนินการไปตามข้อตกลงร่วมกัน",
  "Customer เเยกให้ละเอียดมากขึ้นผ่าน customer persona ที่มีการเเบ่งกลุ่มผ่าน unmet need",
  "เพื่อการเสนอ CVP ที่มีประสิทธิภาพ การวิเคราะห์พฤติกรรมลูกค้าแต่ละ segment ทำให้พบว่าสินค้าของแบรนด์สามารถช่วยตอบสนองความต้องการของ segment ไหนใดบ้าง",
  "จากนั้นจึงจับคู่การวิเคราะห์ดังกล่าวร่วมกับไอเดีย strategies ให้เกิดความเชื่อมโยงกันตาม case study เพื่อทำให้เกิดเป้าหมายที่ชัดเจนในเเต่ละ campaigns ดังนี้",
  "Influencer Partnership",
  "เป้าหมาย เพื่อเพิ่ม Brand Awareness และ Reach ใน Social Media ที่เน้นไปที่รูปเเบบ short video ทำให้ผู้ชมรู้สึกเข้าถึงเเบรนด์ได้ง่าย",
  "Interactive Content",
  "เป้าหมาย เพื่อเพิ่มการรับรู้ และความชื่นชอบในกลุ่มลูกค้า",
  "เช่น เเบรนด์ Procoro ใน TikTok ช่องขายขนม chocolate ผู้ติดตามกว่า 540K ยอดไลค์รวม 14M เน้นทำ content สัมภาษณ์ genz เเละให้ลองชิมขนมของเเบรนด์",
  "User Generated Content",
  "เป้าหมาย เพื่อกระตุ้นให้ลูกค้า ทดลอง และมีส่วนร่วมกับสินค้า",
  "เช่น เเบรนด์ โคเรียดอง ที่สร้างชาเลนจ์ดองของแปลกพร้อมติดแฮชแทก #ดองแปลกแลกหมื่น #koreadong ทำให้เกิดยอด engagement เเละ awareness สูงขึ้น",
  "Brand Character",
  "เป้าหมาย เพื่อสร้างภาพลักษณ์ที่เป็นภาพจำให้กับเเบรนด์",
  "เช่น ร้าน Butter Bear @Emsphere คาเฟ่ขนมหวาน ที่มีมาสคอตหลักเป็นน้องหมีน่ายิ้ม เมื่อเอาไปโปรโมทตามงานไหน ความขี้เล่นของน้อง ทำให้มักจะถูกถ่ายและเป็น Viral ดังไปทั่ว Weibo ประเทศจีนทำให้นักท่องเที่ยวจีนที่มาเที่ยวไทย มักจะมาต่อแถวซื้อสินค้า เพื่อถ่ายรูปกลับไปทุกครั้ง",
  "Seasonal Offering",
  "เป้าหมาย เพื่อสร้างความเกี่ยวโยงกับโอกาสในชีวิตลูกค้ามากขึ้น",
  "เช่น การวางขายผลิตภัณฑ์เป็นระยะเวลา 3 เดือน ตามฤดูกาล หรือเทศกาลสำคัญ"
];

const Article = () => {
  return (
    <div className="article-container">
      <h1>{content[0]}</h1>
      <p>{content[1]}</p>
      <p>{content[2]}</p>
      <ul>
        <li>{content[3]}</li>
        <li>{content[4]}</li>
        <li>{content[5]}</li>
      </ul>
      <p>{content[6]}</p>
      <p>{content[7]}</p>
      <ul>
        <li>
          <strong>{content[8]}</strong>
          <p>{content[9]}</p>
        </li>
        <li>
          <strong>{content[10]}</strong>
          <p>{content[11]}</p>
          <p>{content[12]}</p>
        </li>
        <li>
          <strong>{content[13]}</strong>
          <p>{content[14]}</p>
          <p>{content[15]}</p>
        </li>
        <li>
          <strong>{content[16]}</strong>
          <p>{content[17]}</p>
          <p>{content[18]}</p>
        </li>
        <li>
          <strong>{content[19]}</strong>
          <p>{content[20]}</p>
          <p>{content[21]}</p>
        </li>
      </ul>
    </div>
  );
};

export default Article;

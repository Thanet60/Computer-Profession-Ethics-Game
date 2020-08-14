import React,{ Component } from 'react' ;

class Signin extends Component {
    render(){
      return(
        <div align = 'center'>
          <h3 align = 'center'>ชื่อผู้ใช้:</h3>
          <input type = "text"/><br/>
          <h3 align = 'center'>รหัสผ่าน:</h3>
          <input type = "text"/><br/>
          <h3 align = 'center'>ยืนยันรหัสผ่านอีกครั้ง:</h3>
          <input type = "text"/><br/>
          <button type="button"><h2 align = 'center'>ยืนยัน</h2></button><br/>
          <h2 align = 'center'><a href="/"> ย้อนกลับหน้าแรก </a></h2>
        </div>
      );
    }
  }
  
export default Signin;
import React,{ Component } from 'react' ;

class Login extends Component {

    render(){
      return(
        <form>
          <div align = 'center'>
            <label> ชื่อผู้ใช้ : </label>
            <input type = "text"/><br/>
            <label> รหัสผ่าน : </label>
            <input type = "text"/><br/>
            <h2 align = 'center'><a href="/"> ย้อนกลับหน้าหลัก </a></h2>
            <button><h2 align = 'center'> ยืนยัน </h2></button><br/>
          </div>
        </form>
      );
    }
  } 
  
export default Login;
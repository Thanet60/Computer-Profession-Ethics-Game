// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


import React,{ Component } from 'react' ;

class App extends Component {
  constructor(){
    super();
    this.state= {
      name:"UNKNOW",
      score:0
    };
  }

    render(){
      setInterval(()=>{
        this.setState({score:this.state.score+1});
      },1000);

      return(
        <div>
          <Header/>
          <Button nameButton="เริ่มเล่นทันที" link="/SelectLevel"/><br/>
          <Button nameButton="ลงชื่อเข้าใช้ เพื่อดำเนินการเล่นต่อจากเดิม" link="/Login"/><br/>
          <h2 align = 'center'><a href="/Signin"> สร้างบัญชีใหม่ </a></h2>
          <h3 align = 'center'>ชื่อ : {this.state.name}</h3>
          <h3 align = 'center'>คะแนน : {this.state.score}</h3>
        </div>
      );
    }
}

class Header extends Component {
  render(){
    var HeaderStyle = {
      fontSize:150,
      color:'#83E0ED'
    }
    return(
      <div>
        <h1 style={HeaderStyle} align = 'center'>เกมจรรยาบรรณวิชาชีพคอมพิวเตอร์</h1>
      </div>
    );
  }
}

class Button extends Component {
  render(){ 
    return(
      <div align = 'center'>
        <button type="button"> 
        <h1 align = 'center'>
          <a href={this.props.link}>
            <p>{this.props.nameButton}</p></a>
            </h1>
            </button>
      </div>
    );
  }
}

export default App;
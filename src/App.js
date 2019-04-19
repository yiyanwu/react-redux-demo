import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        你点击了<span id="value">{this.props.n}</span>次
        <div>
        <button id="add1" onClick={()=>this.props.add1()}>加1</button>
        <button id="minus1" onClick={()=>this.props.minus1()}>減1</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){//獲取的是部分的數據，比如n 必須是個函數
  return{
    n: state.n
  }
}

function mapDispatchToProps (dispatch){//創造action 
  return{ 
    add1: ()=>dispatch ({type:'add',payload:1}),
    minus1: ()=>dispatch ({type:'minus',payload:1})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);//返回的是一個connect之後的App

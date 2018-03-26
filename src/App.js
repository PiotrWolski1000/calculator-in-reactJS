import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './App.css';


const styleNumericButtons = {
  height: 100,
};
const styleEquals = {
  height: 200,
};




class Calc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      equation: ''
    }

    this.handleChange = this.handleChange.bind(this)

  
  }
  handleChange (e) {
    this.setState({
      equation: e.target.value
    })
  }
  
  addParam = (e) => {
    let newValue = (this.state.equation).toString() + e.toString();
    
    this.setState({
      equation: newValue
    });
  }


  render() {
    return (
      <MuiThemeProvider>
        <div id='calc'>
          <div id='calcButtons'>
    

    
          <TextField
            className = 'infobar'
            hintText='Please, insert your equation'
            fullWidth={true}
            value={this.state.equation}
            onChange={this.handleChange}
          />


          <RaisedButton style = {styleNumericButtons} className = 'addParam' primary={true}  value = {1} label='1' onClick={(e) => this.addParam(1)}/> 
          <RaisedButton style = {styleNumericButtons} className = 'two' primary={true}  value = {2} label='2' onClick={(e) => this.addParam(2)}/>
          <RaisedButton style = {styleNumericButtons} className = 'three' primary={true}  value = {3} label='3' onClick={(e) => this.addParam(3)}/>

          <RaisedButton style = {styleNumericButtons} className = 'four' primary={true}  value = {4} label='4' onClick={(e) => this.addParam(4)}/> 
          <RaisedButton style = {styleNumericButtons} className = 'five' primary={true}  value = {5} label='5' onClick={(e) => this.addParam(5)}/>
          <RaisedButton style = {styleNumericButtons} className = 'six' primary={true}  value = {6} label='6' onClick={(e) => this.addParam(6)}/>

          <RaisedButton style = {styleNumericButtons} className = 'seven' primary={true}  value = {7} label='7' onClick={(e) => this.addParam(7)}/> 
          <RaisedButton style = {styleNumericButtons} className = 'eight' primary={true}  value = {8} label='8' onClick={(e) => this.addParam(8)}/>
          <RaisedButton style = {styleNumericButtons} className = 'nine' primary={true}  value = {9} label='9' onClick={(e) => this.addParam(9)}/>
          <RaisedButton style = {styleNumericButtons} className = 'zero' primary={true}  value = {0} label='0' onClick={(e) => this.addParam(0)}/>


          <RaisedButton className = 'plus' primary={true} style={styleNumericButtons} label='+' onClick = {(e) => this.addParam('+')}/>
          <RaisedButton className = 'minus' primary={true} style={styleNumericButtons} label='-' onClick = {(e) => this.addParam('-')}/>
          <RaisedButton className = 'multiply' primary={true} style={styleNumericButtons} label='*' onClick = {(e) => this.addParam('*')} />
          <RaisedButton className = 'divide' primary={true} style={styleNumericButtons} label='/' onClick = {(e) => this.addParam('/')}/>
          <RaisedButton className = 'dot' primary={true} style={styleNumericButtons} label='.' onClick = {(e) => this.addParam('.')}/>
          <RaisedButton className = 'clear' primary={true} style={styleNumericButtons} label='CE' onClick = {this.clear}/>
          <RaisedButton className = 'modulo' primary={true} style={styleNumericButtons}  label='%' onClick = {(e) => this.addParam('%')}/>
          <RaisedButton className = 'backspace' primary={true} style={styleNumericButtons} label='<=' onClick = {this.deleteLast}/>
          <RaisedButton className = 'equals' label='=' style={styleEquals} secondary={true} onClick = {this.calculate}/>



          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Calc/>
    );
  }
}

export default App;

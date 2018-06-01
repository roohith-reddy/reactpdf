import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

class Apptest extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }
  render() {
    return (<div>
      <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="mt4" style={{
        backgroundColor: '#f5f5f5',
        width: '210mm',
        minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <div>Note: Here the dimensions of div are same as A4</div> 
        <div>You Can add any component here</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>);
  }

}

  class App extends React.Component {
    render () {
    return (
      <div>
      <img src="https://avatars3.githubusercontent.com/u/39902?v=4"/>
      <div>
        <div>My name..</div>
        <div> My address..</div>
      </div>
    </div>
    )
    };
  };
export default App;

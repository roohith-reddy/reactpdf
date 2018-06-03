import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOMServer from 'react-dom/server';
import pdf from 'html-pdf';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

class PrintComponent extends Component {
 render() {
   return (<div>Hello</div>);
 }
}

function SampleComponent(props) {
 return (
   <div className="SampleComponent">
     {props.text}
   </div>
 );
}

class App extends React.Component {
  printDocument() {

    const input =document.getElementById('divToPrint');
    console.log(input)
    html2canvas(input)

      .then((canvas) => {

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();

        pdf.addImage(imgData, 'JPEG', 0, 0);

        // pdf.output('dataurlnewwindow');

        pdf.save("download.pdf");

      });
    }
  render () {
    //  let html = ReactDOMServer.renderToStaticMarkup(
    //    <SampleComponent text="Hello World" />
    //  );
    //  console.log(html);
     
    //  var options = { format: 'Letter' };

    //  pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
    //    if (err) return console.log(err);
    //    console.log(res); // { filename: '/app/businesscard.pdf' }
    //  });
    //  pdf.create(html).toBuffer(function(err, buffer){
    //   console.log('This is a buffer:', Buffer.isBuffer(buffer));
    // });
     return (
      <div id="divToPrint" className="mt4" style={{

        backgroundColor: '#f5f5f5',

        width: '210mm',

        minHeight: '297mm',

        marginLeft: 'auto',

        marginRight: 'auto'

      }}>

       <div>
       <div>
         <div><SampleComponent text="Hello World" /></div>
         <div>My name..</div>
         <div> My address..</div>
         <button onClick={this.printDocument}>Print</button>
       </div>
     </div>
     </div>
     )
   };
 };
export default App;
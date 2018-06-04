import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import './App.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { HeatMap, LineChart } from './Visuals';

function PrintComponent(props) {
  return (
    <div>
      <h1>Monthly Report</h1>
      <div style={{ height: '500px', width: '500px' }}>
        <HeatMap />
        <LineChart />
      </div>
    </div>
  );
}

let dpi = 72;
let a4 = {
  width: 8.2677,
  height: 11.6929
}

function exportPDF(id) {
  var html = document.getElementById(id);

  html2canvas(html)
    .then((canvas) => {
      const image = canvas.toDataURL('image/jpeg', 1);
      var pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(image, 'JPEG', 0, 0, 210, 297);
      pdf.save('Report.pdf');
    });
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.getElement}>Print</button>
        <div
          id="print-content"
          style={{
            width: (dpi * a4.width) + "px",
            height: (dpi * a4.height) + "px",
            padding: '10px'
          }}>
          <PrintComponent />
        </div>
      </div>
    )
  };

  getElement() {
    exportPDF("print-content");
  }
};
export default App;

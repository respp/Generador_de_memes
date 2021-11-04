import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  const onChangeLinea1 = function(valor) {
    setLinea1(valor.target.value);
  }
  const onChangeLinea2 = function(valor) {
    setLinea2(valor.target.value);
  }
  const onChangeImagen = function(valor) {
    setImagen(valor.target.value);
  }
  const onClickExportar = function(valor) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
  });
  }  

  return (
    <div className="App">

      <h1>Meme Generator</h1>

      <select onChange={onChangeImagen}>
        <option value='elije'>Elije tu meme</option>
        <option value='fire' >Casa en llamas</option>
        <option value='futurama'>Futurama</option>
        <option value='aliens'>History channel</option>
        <option value='matrix'>Matrix</option>
        <option value='philosoraptor'>Philosoraptors</option>
        <option value='smart guy'>Smart guy</option>
      </select><br />

      <input type='text' maxlength="30" onChange={onChangeLinea1} placeholder='Linea 1'/><br />
      <input type='text' maxlength="30" onChange={onChangeLinea2} placeholder='Linea 2'/><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='main-container' id='meme'>
        <span>{linea1.toUpperCase()}</span>        
        <img src={'/img/' + imagen + '.jpg'} />
        <span>{linea2.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default App;

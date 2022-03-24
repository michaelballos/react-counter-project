import './App.css';
import React, { useState } from 'react';
import Imagebackground from './img/Imagebackground.svg';

function Title({ title }) {
  return <p id='interfaceTitle'>{title}</p>;
}



function App() {
  const [currentCount, countFunc] = useState(0);

  return (
    <>
      <img id="bg" src={Imagebackground} />

      <div className="App">
        <p id="pageTitle">Į̶̛̾̓̿̃̃͌̎͊͝ͅn̶̪̼̥̖͖̄̉́͐̔̈́͂͊̈́͜͝c̵͉̭͓̘̯̩̝̜̘̦͙̖̼̽̄̋̒r̵̻̥̘͈̣̻̩̎̅́e̵̲̲̝̤̊̑̄ḿ̷̢̢̨̡̟̯̠͚͇̈́e̴̠̣̝̩͍͈͉̜̐̉́͒͑͒̿̓͑͊̊͝ͅṉ̴̨̮̰̼̹̺͈̞̙͂̓ͅt̷̢̧̛͚̙͆͆͒́̈́̒͌̆̏̀ ̵̨̨̛͚̥̻͖̺̙̜͍̭͙̥̈́̃̈́̍̐a̶̧̞͖͈̖̖͂̆́̍͛̌̄͊̔͗͐̕͠n̴̬̻̹̉́̍̌̒̈́̋̏̎̏̍̾͠d̷̡̨̜͔̳̰̮̜̾̔́͑̌̊̃͐̽́̑̓͠ ̵̡̧̹̬͙͍͇͂̒̈́̓̂̑̊̋̈́͌͘͜͝Ḑ̷̡̞̣͖̼̳̞̹̲̪͌̌ͅe̶̢̝͇̩̦̘̖̱̯̮̅͗́͌̀̅̿̂̓͝͝ͅͅc̷̞̻̃̇͛̓́͘r̵͈̮̽͆͋̚͝ě̵̻̞̦̏̌̄̔̅̕͝m̶̨͚̘̟̦͚̫͈̤̝̝̈͂̐̐̆̓̃̾͑̀̅͗͠ͅȩ̸̥͉̝̣̬̞̮̲̟̃̍͋̂̀͗̐̕ͅň̴̝̫̣͋̅̌͊̾̕t̷̬̩̜̣̪͎̬͈̱͋̔̄̽͘̕ͅ ̷̡̪̜̿̎̃̏̒̾̕̕͜͝͝͝C̶̡̻̖̲̱͈̏̓̋͗̒̇̓͌̕͘͝ͅȍ̷̡̖̖̩͕̪͈͉͈̊̎̍̌̈́̿ͅͅͅü̶͔̅̿̈́̇̏͂̄ń̶̖͕͈̂͗̂̂͐̏͂̔̓̏̊͝t̵̨̢͔͖͋̐̏͊͌̋̇̌̕̕͘e̵͇͙̖͚̥̦͂͗̇̊̄͐̓̂̒̽͝͝͝ͅr̷̩̖̤͇͙̞̪̖̽̄͑</p>

        <div id="counterInterface">
          <Title title="Press Me Harder rawr XD" />
          <p id='cunt'>{currentCount}</p>

          <p id='countLabel'>Current Count:</p>
          <div id="buttons">
            <button id="sub" onClick={() => countFunc(currentCount - 1)}>
              Subtract
            </button>
            <button id="add" onClick={() => countFunc(currentCount + 1)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

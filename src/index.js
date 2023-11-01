import { TIME } from 'mysql/lib/protocol/constants/types';
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
const fName = "reeya"
const lname = "manandhar"
const current_date = new Date().toLocaleDateString()
const current_time = new Date().toLocaleTimeString()
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/200/300"
const links='https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14'

const heading = {
  color : '#fa9191', 
  textTransform: 'capitalize'
}


root.render(
                < >
                  <h1 style={heading}>Hello world</h1>
                  <h2>this is another world</h2>
                  <h2>{`my name is ${fName} ${lname}`}</h2>
                  <h2>{`current date is  ${current_date}`}</h2>
                  <h2>{`current time is  ${current_time}`}</h2>
                  <h2 contentEditable = "true">This line is editable</h2>
                  <div className='img_div'>
                    <img src={img2} alt = "ramdom iamage"/>
                    <a href={links} target='_blank'>
                      <img src={img1} alt = "ramdom iamage"/>
                    </a>
                  </div>
                  
                  <ol>
                    <li><p>first item in the list</p></li>
                    <li><p>second item in the list</p></li>
                  </ol>
                </ >
                )  
// or can be displyed using list
// ReactDOM.render(
// [
//     <h1>Hello world</h1>,
//     <h2>this is another world</h2>
// ],
//   root
//   )                
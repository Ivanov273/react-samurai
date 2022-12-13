import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import SamuraiApp from "./App";

it('renders App',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<SamuraiApp />,div)
    ReactDOM.unmountComponentAtNode(div)
})
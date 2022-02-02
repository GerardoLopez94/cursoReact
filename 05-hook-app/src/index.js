import React from 'react';
import ReactDom from 'react-dom';
//import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

//import { HookApp } from './HookApp';

ReactDom.render(
    <CounterWithCustomHook />,
    document.getElementById('root')
);
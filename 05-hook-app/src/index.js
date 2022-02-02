import React from 'react';
import ReactDom from 'react-dom';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

//import { HookApp } from './HookApp';

ReactDom.render(
    <FormWithCustomHook />,
    document.getElementById('root')
);
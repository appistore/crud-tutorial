import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import DaftarMhs from './DaftarMhs'
import AddMhs from './AddMhs'
import EditMhs from './EditMhs'


function App () {
    return (
        <BrowserRouter>
            <Header/>

            <Route path="/" exact component={DaftarMhs}/>
            <Route path="/add" component={AddMhs}/>
            <Route path="/edit/:id" component={EditMhs}/>
        </BrowserRouter>
    )
}

export default App
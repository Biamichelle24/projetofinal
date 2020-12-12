import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Direitos from '../Pages/Direitos'
import Contato from '../Pages/Contato'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/direitos" component={Direitos}/>
                <Route path="/contato" component={Contato}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
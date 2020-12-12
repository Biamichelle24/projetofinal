import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Foo'
import '../Styles/Pages/contato.css'


function Contato(){
    return(
        <div>
            <header class="header-contato">
                <Menu/>
                <div className="title-contato">
                    <h1>FAÇA PARTE DESSE PROGRAMA</h1>
                        <a href="https://biamichellelivre.typeform.com/to/MHIsO7Mx" rel="noreferrer" target="_blank" >
                            <button type="button" className="btn-transp"> Se inscreva</button>
                        </a>
                </div>
            </header>
            <Footer/>
        </div>
    )
}

export default Contato
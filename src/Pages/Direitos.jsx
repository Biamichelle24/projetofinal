import React from 'react'
import '../Styles/Pages/direitos.css'
import direitos from '../Services/direitos'
import Menu from '../Components/Menu'
import Footer from '../Components/Foo'

function Direitos(){
    return(
        <div>
            <header className="header-direitos">
                <Menu/>
            </header>
                 <section>
                        <h2>Conheça as principais conquistas da comunidade LGBTQI+ no Brasil.</h2>
                        <div id="container">
                        {direitos.map(direito=>{
                            return <div className="card" key={direito.id}> 
                                            <h3>Título: {direito.nome}</h3>
                                            <p>{direito.resumo}</p>
                                    </div>
                        })} 
                        </div>
                </section>
            <Footer/>
        </div>
    )
}

export default Direitos
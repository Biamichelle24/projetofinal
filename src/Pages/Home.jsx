import React from 'react'
import '../Styles/Pages/home.css'
import news from '../Services/news'
import Menu from '../Components/Menu'
import Footer from '../Components/Foo'

function Home(){

    return(
        <div>
            <header className="header-home">
                <Menu/>
            </header> 
            <section className="news-home">
                <div className="row-content">
                    <h2>NOTICÍAS</h2>
                    <hr id="div-simple-home"></hr>
                </div>
                <div className="row-column-01">
                {news.map(noticia=>{
                    return <div className="column-01" key={noticia.id}> 
                                
                                    <h3>Título: {noticia.nome}</h3>
                                        <div className="image-home">
                                        <img src={noticia.capa} alt="capa"/>
                                    <a href={noticia.link} id="home-paragrafo" className="card">
                                        <p>{noticia.texto}</p>
                                    </a>
                                        <hr></hr>
                                    </div>  
                                
                            </div>
                })} 
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home

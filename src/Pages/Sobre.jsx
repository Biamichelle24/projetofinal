import noticias from '../Services/dados'
import Menu from '../Components/Menu'
import Footer from '../Components/Foo'
import '../Styles/Pages/sobre.css'
import imagem from '../Assets/3_BLM_PROTESTS.svg'
import { useState, useEffect } from 'react'



const ListaInterna = ()=>{
    const [busca, setBusca] = useState('') 
    const [filtroNoticias, setFiltroNoticicias] = useState([])

    useEffect(()=>{
        setFiltroNoticicias(
            noticias.filter(noticia=>{
                return noticia.nome.toLowerCase().includes(busca.toLowerCase())
            })
        )
    }        
    ,[busca])

    return(
        <>
            <div>
                <header className="header-sobre">
                    <Menu/>
                </header>
                <section>
                        <div className="sobre-titulo-paragrafo">
                            <h2>TransCidadania</h2>
                        </div>
                        <div class="sobre-paragrafo">
                            <p>O Programa TransCidadania promove a reintegração social e o resgate da cidadania para travestis, mulheres transexuais e homens trans em situação de vulnerabilidade. Atualmente o programa possui 240 vagas. Utilizando o desenvolvimento da educação como principal ferramenta, as beneficiárias e os beneficiários recebem a oportunidade de concluir o ensino fundamental e médio, ganham qualificação profissional e desenvolvem a prática da cidadania.</p>
                            <p>Outro diferencial do programa, que já virou destaque mundial por ser inovador, é a transferência de renda, que possibilita a disponibilidade das beneficiárias em concluírem a carga obrigatória de atividades. Cada beneficiária (o) recebe acompanhamento psicológico, jurídico, social e pedagógico durante os dois anos de permanência no programa.</p>
                            <p>O Transcidadania é norteado por três principais eixos de atuação: autonomia, cidadania e oportunidades.</p>
                        </div>
                        <img id="img" src={imagem} alt="imagem da pagina sobre o transcidadania"></img>
                </section>  
                <section>
                        <div className="pesquisa-sobre">
                            <h3>Acompanhe algumas matérias sobre o TransCidadania</h3>
                        </div>
                        <div className="secao-sobre">
                        <input 
                                className="input-sobre"
                                type="text" 
                                placeholder="Pesquise" 
                                onChange={e=>{setBusca(e.target.value)}}
                            />
                        </div>
                        <div id="container">
                        {filtroNoticias.map(noticia=>{
                            return <a href={noticia.link} className="card">
                                        <div  key={noticia.id}> 
                                                <h3>Título: {noticia.nome}</h3>
                                                <img src={noticia.capa} alt="capa"/>
                                        </div>
                                    </a>
                        })} 
                        </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default ListaInterna
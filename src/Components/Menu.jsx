import { Link } from 'react-router-dom'
import '../Styles/Components/menu.css'
import { useEffect } from 'react'
import logo from '../Assets/logo-trans.png'
import logoScroll from '../Assets/transcidadania_scroll.png'



const Menu = () =>{

    useEffect(() => {
        window.addEventListener("scroll", function(){
            let scroll = window.scrollY;
            console.log(scroll)

            if (scroll >= 150) {
                document.getElementsByClassName("header")[0].classList.add("scrolling");
                document.getElementsByClassName("brand")[0].classList.add("brand-scroll");
                document.getElementsByClassName("brand")[0].src =logoScroll;
            } else {
                document.getElementsByClassName("header")[0].classList.remove("scrolling");
                document.getElementsByClassName("brand")[0].classList.remove("brand-scroll");
                document.getElementsByClassName("brand")[0].src =logo;
            }
        })
    }, [])



    return (
            <>
                <nav className="header">
                        <Link className="link" to="/"><img src={logo} className="brand" alt="logo do transcidadania"></img></Link>
                        <div class="hamburguer">
                            <div class="bar1">SOBRE</div>
                            <div class="bar2">DIREITOS</div>
                            <div class="bar3">CONTATO</div>
                        </div>
                        <ul class="header-ul">
                            <li> <Link className="link" to="/">HOME</Link></li>
                            <li> <Link className="link" to="/sobre">SOBRE</Link></li>
                            <li> <Link className="link" to="/direitos">DIREITOS</Link></li>
                            <li> <Link className="link" to="/contato">CONTATO</Link></li>
                        </ul>  
                    </nav>
            </>
    )
}

export default Menu
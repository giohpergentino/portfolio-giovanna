import { useState } from 'react';
import './navbar.css'

function Navbar(){
return (
    <nav className='containerNavbar'>
        <ul className='actions'>
            <li><a href="#"><b>Início</b></a></li>
            <li><a href="#sobre"><b>Sobre mim</b></a></li>
            <li><a href="#projetos"><b>Projetos</b></a></li>
            <li><a href="#contato"><b>Contato</b></a></li>
        </ul>
    </nav>
    );
}

export default Navbar;
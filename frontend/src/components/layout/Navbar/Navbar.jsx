import './Navbar.css'

import Paper from '@material-ui/core/Paper'

function Navbar(props) {
    return (
        
        <Paper className="navbar" square>
        
            <nav className="nav" >
                <a href="/produtos" className="navItem" >Produtos</a>
                <a href="#categorias" className="navItem" >Categorias</a>
                <a href="#marcas" className="navItem" >Marcas</a>
                <a href="#estilos" className="navItem" >Estilos</a>
                <a href="/admin" className="navItem" >Admin</a>
            </nav>
        </Paper>
    )
}

export default Navbar
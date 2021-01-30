import './Footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <div className="cols">
                <div className="col">
                    Copyright &copy; 2021
                    <br/>
                    <br/>
                    <i>Ecommerce</i>
                </div>
                <div className="col">
                    <a href="#/curso" className="footerLink"><strong>Produtos</strong></a>
                    <a href="#/ebook" className="footerLink">Encomendas</a>
                    <a href="#/produto" className="footerLink">Projetos</a>
                </div>
                <div className="col">
                    <a href="#/empresa" className="footerLink"><strong>Empresa</strong></a>
                    <a href="#/sobre" className="footerLink">Sobre</a>
                    <a href="#/noticias" className="footerLink">Notícias</a>
                    <a href="#/eventos" className="footerLink">Eventos</a>
                    <a href="#/blog" className="footerLink">Blog</a>
                </div>
            </div>
            <div className="credits">
                <p>Desenvolvido por <a href="https://github.com/felipebetts" target="_blank" rel="noreferrer">Felipe Betts</a></p>
            </div>
        </div>
    )
}

export default Footer
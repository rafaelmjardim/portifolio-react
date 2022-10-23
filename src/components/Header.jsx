import '../styles/components/Header.sass';
import logo from '../assets/logo.png';

export default function Header() {

    return(
        <div className="header">
            <div className="header_logo">
                <img src={logo} alt="Logo Portifolio" />
            </div>

            <ul className="header_list">
                <li className="header_list_item">
                    <a className="header_list_item_link" href="#">
                        <span className="header_list_item_link_first">Home</span>
                    </a>
                </li>

                <li className="header_list_item">
                    <a className="header_list_item_link" href="#">Sobre</a>
                </li>

                <li className="header_list_item">
                    <a className="header_list_item_link" href="#">Habilidades</a>
                </li>

                <li className="header_list_item">
                    <a className="header_list_item_link" href="#">Contato</a>
                </li>
            </ul>

            <div className="header_button">
                <span className="header_button_txt">Contratar</span>
            </div>
        </div>
    )
}
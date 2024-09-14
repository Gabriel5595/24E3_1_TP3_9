import { useState } from "react";

import styles from "./header.module.css"
import 'primeicons/primeicons.css';

export default function Header() {

    const [isOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!isOpen);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerImgContainer}>
                <img
                    className={styles.headerImg}
                    src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" 
                    alt="logo placeholder" />
            </div>

            <div className={styles.optionsContainer}>
                <i className="pi pi-bars" onClick={() => toggleMenu()}></i>

                <ul className={isOpen ? styles.navbar : styles.navbarActive}>
                    {/* UTILIZE UM TERNÁRIO NA CLASSE ACIMA PARA DEFINIR O CLASSE EM SI COM BASE NO STATUS DE isOpen. */}
                    <li className={styles.navItem}><a>Home</a></li>
                    <li className={styles.navItem}><a>Serviços</a></li>
                    <li className={styles.navItem}><a>Produtos</a></li>
                    <li className={styles.navItem}><a>Sobre Nós</a></li>
                    <li className={styles.navItem}><a>Contatos</a></li>
                </ul>
            </div>
        </div>
    )
}
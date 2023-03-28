import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://neilpatel.com/wp-content/uploads/2017/12/codigos-html-para-paginas-web.jpeg"
                alt="Imagem de um pc"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/josias2dev.png" alt="Foto de perfil" />
                <strong>Josias Ribeiro</strong>
                <span>Web Developer</span>
            </div>


            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}
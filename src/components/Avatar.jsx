import Styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src, alt }) {

    return (

        <div >
            <img
                className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
                src={src}
                alt={alt} />
        </div>
    );
}

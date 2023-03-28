import Styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {

    return (

        <div >
            <img
                className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
                src={src}
                alt={alt} />
        </div>
    );
}

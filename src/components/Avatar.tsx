import { ImgHTMLAttributes } from 'react';
import Styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

    return (

        <div >
            <img
                className={hasBorder ? Styles.avatarWithBorder : Styles.avatar}
                {...props}
            />
        </div>
    );
}

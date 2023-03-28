import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

interface CommentProps {
  id: number;
  content: string;
  publishedAt?: Date;
  onDeleteComment: (id: number) => void;
}

export function Comment({ id, content, publishedAt = new Date(), onDeleteComment }: CommentProps) {

  const formattedDate = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", { locale: ptBR });
  const publishedAtDistance = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(state => state + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/josias2dev.png" alt="Foto de perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Josias Ribeiro</strong>
              <time title={formattedDate} dateTime={publishedAt.toISOString()}>{publishedAtDistance}</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
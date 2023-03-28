import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface PostProps {
    author: Author;
    content: Array<Content>;
    publishedAt: Date;
}

interface Author {
    name: string;
    role: string;
    avatar_url: string;
}

interface Content {
    id: number;
    type: 'paragraph' | 'link';
    content: string;
}

export function Post({ author, content, publishedAt }: PostProps) {

    const [comments, setComments] = useState([{
        id: 1,
        content: 'Muito bom Devon, parabéns!! 👏👏',
        publishedAt: new Date('2022-11-02 20:12:00'),
    }])

    const [newCommentText, setNewCommentText] = useState('');

    const formattedDate = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", { locale: ptBR });
    const publishedAtDistance = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, {
            id: 2,
            content: newCommentText,
            publishedAt: new Date(),
        }]);

        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewcommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('O campo de comentário não pode estar vazio')
    }

    function deleteComment(idComment: number) {
        const commentsWithoutDeleted = comments.filter(comentario => {
            return comentario.id !== idComment
        })

        setComments(commentsWithoutDeleted)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar_url} alt="Foto de perfil" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time className={styles.date} dateTime={publishedAt.toISOString()} title={formattedDate}>
                    {publishedAtDistance}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(content => {
                        if (content.type === 'paragraph') {
                            return <p key={content.id}>{content.content}</p>
                        }

                        if (content.type === 'link') {
                            return <p key={content.id}><a href='#'>{content.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewcommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            {comments.map(comment => <Comment key={comment.id} onDeleteComment={deleteComment} {...comment} />)}
        </article>
    );
}
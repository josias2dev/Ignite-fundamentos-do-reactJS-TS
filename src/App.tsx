import { Header } from './components/Header';
import { Post } from './components/Post';

import './components/Global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

enum ContentType {
  Paragraph = "paragraph",
  Link = "link"
}

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/josias2dev.png',
      name: 'Josias',
      role: 'Web Developer'
    },
    content: [
      { id: 1, type: ContentType.Paragraph, content: 'Fala galera 👋' },
      { id: 2, type: ContentType.Paragraph, content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: ContentType.Link, content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/josias2dev.png',
      name: 'Josias',
      role: 'Web Developer'
    },
    content: [
      { id: 4, type: ContentType.Paragraph, content: 'Fala galera 👋' },
      { id: 5, type: ContentType.Paragraph, content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 6, type: ContentType.Paragraph, content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-02 10:00:00'),
  }
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => <Post key={post.id} {...post} />)}
        </main>
      </div>

    </>
  )
}



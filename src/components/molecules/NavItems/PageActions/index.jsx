import { 
    Undo2, 
    Redo2, 
    History
  } from 'lucide-react'

import styles from '../styles.module.css'
  
const PageActions = ({}) => {
  return (
    <div className={styles.root}>
      <button className={styles.iconButton}>
        <Undo2 size={16}/>
      </button>
      <button className={styles.iconButton}>
        <Redo2 size={16}/>
      </button>
      <button className={styles.iconButton}>
        <History size={16}/>
      </button>
    </div>
  )
}
export default PageActions;
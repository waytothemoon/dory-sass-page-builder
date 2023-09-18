import { 
    Laptop, 
    Tablet, 
    Expand, 
    ArrowUpRightSquare 
  } from 'lucide-react'
  
import styles from '../styles.module.css'

const ScreenActions = ({}) => {
  return (
    <div className={styles.root}>
      <button className={styles.iconButton}>
        <Laptop size={16}/>
      </button>
      <button className={styles.iconButton}>
        <Tablet size={16}/>
      </button>
      <button className={styles.iconButton}>
        <Expand size={16}/>
      </button>
      <button className={styles.iconButton}>
        <ArrowUpRightSquare size={16}/>
      </button>
    </div>
  )
}
export default ScreenActions;
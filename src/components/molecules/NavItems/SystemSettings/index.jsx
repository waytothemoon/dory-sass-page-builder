import { 
    Settings, 
    HelpCircle, 
  } from 'lucide-react'
  
import styles from '../styles.module.css'

const SystemSettings = ({}) => {
  return (
    <div className={styles.root}>
      <button className={styles.iconButton}>
        <Settings size={16}/>
      </button>
      <button className={styles.iconWithText}>
        <HelpCircle size={16}/>
        <p className='normal-case'>Help</p>
      </button>
    </div>
  )
}
export default SystemSettings;
import { 
  Table, 
  MountainSnow, 
  AlignVerticalSpaceAround
} from 'lucide-react'
import styles from './styles.module.css'

const BuilderPropertyTab = (props) => {
  return (
    <div className={styles.tabContainer}>
      <button className="tab tab-lg">
        <Table size={20}/>
      </button> 
      <a className="tab tab-lg tab-active">
        <MountainSnow size={20}/>
      </a> 
      <a className="tab tab-lg">
        <AlignVerticalSpaceAround size={20}/>
      </a> 
    </div>
  )
}
export default BuilderPropertyTab
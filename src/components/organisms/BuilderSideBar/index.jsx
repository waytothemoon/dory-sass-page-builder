import BuilderPropertyTab from '@/components/molecules/BuilderPropertyTab';
import styles from './styles.module.css'

const BuilderSideBar = (props) => {
  return (
    <div className={styles.root}>
      <BuilderPropertyTab />
    </div>
  )
}
export default BuilderSideBar;
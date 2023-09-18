import Image from 'next/image'

import {PageActions, ScreenActions, SystemSettings} from '../../molecules/NavItems'

import styles from './styles.module.css'

export default function Header({ children }) {
  return (
    <div className={styles.root}>
      <div>
        <Image 
          src="/dory-logo.png"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.navItemsContainer}>
        <SystemSettings />
        <ScreenActions />
        <PageActions />
      </div>
    </div>
  )
}

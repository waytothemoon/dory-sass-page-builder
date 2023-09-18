import React from 'react';

import Header from '../../organisms/Header'
import SideBar from '../../organisms/BuilderSideBar'

import styles from './styles.module.css'
const PageBuilderTemplate = (props) => {

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className='flex'>
        {props.children}
        <SideBar/ >
      </div>
    </div>
  )
}

export default PageBuilderTemplate
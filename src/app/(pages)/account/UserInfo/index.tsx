'use client'

import React from 'react'
import Image from 'next/image'

import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

const UserInfo = () => {
  const { user } = useAuth()

  return (
    <div className={classes.profile}>
      <Image src="/assets/icons/profile.svg" alt="profile" width={40} height={40} />
      <div className={classes.profileInfo}>
        <h6 className={classes.name}>{user?.name}</h6>
        <p className={classes.email}>{user?.email}</p>
      </div>
    </div>
  )
}

export default UserInfo

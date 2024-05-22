import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { profileNavItems } from '../../constans'
import UserInfo from './UserInfo'

import classes from './index.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>My Profile</h3>
        <div className={classes.profile}>
          <div className={classes.nav}>
            <UserInfo />
            <div>
              <ul>
                {profileNavItems.map(item => (
                  <Link href={item.url}>
                    <li key={item.title} className={classes.navItem}>
                      <Image src={item.icon} alt={item.title} width={22} height={22} />
                      <p>{item.title}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {children}
        </div>
      </Gutter>
    </div>
  )
}

export default Layout

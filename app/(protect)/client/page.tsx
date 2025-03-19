import { userInfo } from '@/actions/user-info'
import { UserInfo } from '@/components/user-info'
import React from 'react'

const Server = async  () => {
    const user = await userInfo() 

  return (
    <UserInfo label='📱 Client Component' user={user} />
  )
}

export default Server

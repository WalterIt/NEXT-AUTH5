import { UserInfo } from '@/components/user-info'
import React from 'react'
import { userInfo } from '@/actions/user-info'

const Server = async () => {
    const user = await userInfo()
    // console.log(user);
    

  return (
    <UserInfo label='💻 Server Component' user={user} />
  )
}

export default Server



// 'use server'

// import { UserInfo } from '@/components/user-info'
// import React from 'react'
// import { useUserInfo } from '@/hooks/user-info'

// const Server =  () => {
//     const user  =   useUserInfo()
//     // console.log(user);


//   return (
//     <UserInfo label='💻 Server Component' user={user ?? undefined} />
//   )
// }

// export default Server
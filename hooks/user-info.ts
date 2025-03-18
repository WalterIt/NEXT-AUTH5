
import { auth } from "@/auth"

export const useUserInfo = async () => {
    const session = await auth()
    return session?.user
}



// 'use client'

// import { useState, useEffect } from 'react';
// import { auth } from "@/auth";
// import { ExtendedUser } from '@/next-auth'

// export function useUserInfo() {
//   const [user, setUser] = useState<ExtendedUser | null | undefined>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const session = await auth();
//       setUser(session?.user);
//     };
//     fetchUser();
//   }, []);

//   return user;
// }
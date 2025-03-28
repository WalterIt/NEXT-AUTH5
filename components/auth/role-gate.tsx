"use client"

import { useCurrentRole } from '@/hooks/use-current-role'
import { UserRole } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { FormError } from '../form-error'

interface RoleGateProps {
    children : React.ReactNode,
    allowedRole : UserRole
}

const RoleGate = ({children, allowedRole} : RoleGateProps) => {
    const [role, setRole] = useState<UserRole | undefined>(undefined);
    const currentRole = useCurrentRole();

    useEffect(() => {
        setRole(currentRole as UserRole)
    }, [currentRole])

    // const role = useCurrentRole()

    if(role !== allowedRole) {
        return (
            <FormError message='You do not have permission to view this content!!' />
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default RoleGate
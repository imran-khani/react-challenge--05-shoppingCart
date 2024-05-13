'use client'

import React from 'react'
import Modal from './Modal'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { onClose } from '@/features/loginSlice'

const LoginModal = () => {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector((state) => state.loginSlice)
    const handleClose = () => {
        dispatch(onClose())
    }

    const body = (
        // two input fields for email and password
        <div className="flex flex-col space-y-4">
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded-md"
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded-md"
            />
        </div>
    )
    return (

        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title="Login"
            onSubmit={() => { }}
            actionLabel="Login"
            body={body}
        />


    )
}
export default LoginModal
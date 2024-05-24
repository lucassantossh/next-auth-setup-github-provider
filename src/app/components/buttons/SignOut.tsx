'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

type Props = {}

export default function SignOut({}: Props) {
  return (
    <button
      className='px-4 py-2 bg-red-800 capitalize font-bold rounded-sm'
      onClick={() => {
        signOut()
      }}
    >
      sair
    </button>
  )
}

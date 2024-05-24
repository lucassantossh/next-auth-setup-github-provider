'use client'

import { signIn } from 'next-auth/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

type Props = {}

export default function GithubLogin({}: Props) {
  return (
    <button
      className='mx-auto max-w-md py-3 px-6 flex gap-4 justify-center border-b pb-2 hover:rounded-lg hover:border hover:border-slate-500'
      onClick={() => {
        signIn('github', { callbackUrl: '/' })
      }}
    >
      <p>Faça seu login com o github</p>
      <span>
        <FaGithub size={24} />
      </span>
    </button>
  )
}

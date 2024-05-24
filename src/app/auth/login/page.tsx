import GithubLogin from '@/app/components/buttons/GithubLogin'
import React from 'react'

type Props = {}

export default function LoginPage({}: Props) {
  return (
    <main className='my-8 mx-24 rounded-lg bg-slate-900 py-12'>
      <div className='border-b pb-1'>
        <h1 className='text-4xl text-blue-700 text-center font-bold'>
          Entre em sua conta
        </h1>
      </div>
      <div className='py-12 px-4'>
        <GithubLogin />
      </div>
    </main>
  )
}

'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import SignOut from './buttons/SignOut'
import Image from 'next/image'

type Props = {}

export default function Dashboard({}: Props) {
  const { data: session } = useSession()
  return (
    <div>
      {session ? (
        <div className='flex flex-col justify-center items-center'>
          <Image
            src={`${session.user?.image}`}
            width={128}
            height={128}
            alt='Imagem de perfil'
            className='rounded-full mb-8'
          />
          <p className='text-2xl font-semibold mb-4'>
            Bem vindo{' '}
            <span className='text-blue-300'>{session.user?.name}</span>
          </p>
          <p className='mb-8 font-light text-sm'>
            {session.user?.email as string}
          </p>
          <SignOut />
        </div>
      ) : (
        <div className='flex justify-center items-center flex-col'>
          <p>voce não tem permissão para ver o dashboard</p>
          <div className='py-8 flex-col flex items-center'>
            <p className='mb-4 font-light'>Entre em sua conta</p>
            <Link
              href={'/auth/login'}
              className='block w-fit mt-4 px-4 py-2 rounded-sm border'
            >
              login
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

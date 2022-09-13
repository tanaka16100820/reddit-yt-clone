import { useSession } from 'next-auth/react';
import React from 'react'
import Image from 'next/image'

type Props = {
    seed? : string
    large?: boolean

}

export const Avatar = ({seed, large}:Props) => {
    const {data: session} = useSession();
  return (
    <div className={`relative overflow-hidden ${!large ? ('h-10 w-10'):('h-20 w-20')} rounded-full border-gray-300 bg-white`}>
        <Image 
            layout="fill"
            src={`https://avatars.dicebear.com/api/bottts/${
                seed || session?.user?.name || 'placeholder'}.svg`}/>
    </div>
  )
}

import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitBtn() {
    const { pending } = useFormStatus()

    return (
        <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-cyan-600 text-white rounded-full outline-none transition-all focue:scale-110 hover:scale-110 hover:bg-cyan-500 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-blue-500 dark:bg-opacity-10' disabled={pending}>
            {
                pending
                    ? (
                        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                    )
                    : (
                        <>
                            Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
                        </>
                    )
            }
        </button>
    )
}

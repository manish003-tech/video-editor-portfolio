'use client'

import Work from '@/components/Work'
import Transition from '@/components/TransitionPage'
import Navbar from '@/components/Navbar'

const Page = () => {
    return (
        <Transition>
            <Navbar />
            <Work />
        </Transition>
    )
}

export default Page
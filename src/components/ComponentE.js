import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
    const user = useContext(UserContext)
    const surname = useContext(ChannelContext)
    return (
        <div>
            {/* <ComponentF /> */}
            {user} {surname}
            {/* We can see how easy it had made context consumption :D */}
        </div>
    )
}

export default ComponentE

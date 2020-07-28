import React, {useContext} from 'react'
import ComponentD from './ComponentD'
import { UserContext, ChannelContext } from './TopLevelContext'

function ComponentC() {
     const user = useContext(UserContext)
     const channel = useContext(ChannelContext)

    return (
        <div>
            <h1> Using useContext single line {user} - {channel}</h1>
            <ComponentD/>
        </div>
    )
}

export default ComponentC

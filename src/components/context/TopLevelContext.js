import React from 'react'
import ComponentA from './ComponentA'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function TopLevelContext() {
    return (
        <div>
            <UserContext.Provider value={'Srinivas Karre'}>
                <ChannelContext.Provider value={'Codevolution'}>
                        <ComponentA/>
                </ChannelContext.Provider>
                </UserContext.Provider>
            
        </div>
    )
}

export default TopLevelContext

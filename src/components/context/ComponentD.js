import React from 'react'
import {UserContext, ChannelContext} from './TopLevelContext'
function ComponentD() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                         return ( 
                             <ChannelContext.Consumer>
                                 {
                                     channel => {
                                         return (
                                         <div> using consumer render props pattern - User is {user} channel = {channel}</div>
                                         )
                                     }
                                 }
                             </ChannelContext.Consumer>
                         )
                    }
                }
                </UserContext.Consumer>
        </div>
    )
}

export default ComponentD

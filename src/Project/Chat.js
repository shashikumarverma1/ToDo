import React from 'react'
import MiddleChatbar from '../component/MiddleChatbar'
import RightSidebox from '../component/RightSidebox'
import SideuserChat from '../component/SideuserChat'

function Chat() {
  return (
   
        <div className=' bg-light'>
          <div className='row'>
           <div className='col-3 mt-3 mx-2'>
            <SideuserChat />
           </div>
           <div className='col-5 mt-3 mx-2'>
            <MiddleChatbar />
           </div>
           <div className='col-3 mt-3 mx-2'>
            <RightSidebox />
          </div>
        </div>
      </div>
    
  )
}

export default Chat
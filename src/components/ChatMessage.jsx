import React from 'react'

const ChatMessage = () => {
  return (
    <div className='container message-cstm'>
      {/* User question */}
      <div className='d-flex justify-content-end mb-2'>
        <div className='p-3 border shadow-sm bg-primary-subtle rounded-user-cstm'>
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question:</strong> User question is here
        </div>
      </div>

      {/* AI response */}
      <div className='d-flex justify-content-start'>
        <div className='p-3 border shadow-sm bg-primary-subtle rounded-ai-cstm'>
          <i className="bi bi-robot me-2 me-2"></i>
          <strong>Answer:</strong>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur sequi explicabo eius dolore, iure aliquam minus veniam quae doloribus suscipit assumenda magni est itaque vitae beatae, similique animi verosa!
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
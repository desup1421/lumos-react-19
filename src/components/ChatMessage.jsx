import React from 'react';
import Markdown from 'react-markdown';

const ChatMessage = ({ message, query }) => {
  return (
    <div className='container message-cstm'>
      {/* User question */}
      <div className='d-flex justify-content-end mb-3'>
        <div className='p-3 border shadow-sm bg-primary-subtle rounded-user-cstm'>
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question:</strong> {query}
        </div>
      </div>

      {/* AI response */}
      <div className='d-flex justify-content-start'>
        <div className='p-3 border shadow-sm bg-primary-subtle rounded-ai-cstm'>
          <i className="bi bi-robot me-2 me-2"></i>
          <strong>Answer:</strong>
          <div>
            <Markdown>{message}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
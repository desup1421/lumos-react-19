import React from 'react'

const ChatInput = () => {
  return (
    <form className='fixed-bottom p-3 bg-primary-subtle border-top shadow'>
      <div className='input-group container'>
        <input 
          type="text" 
          placeholder='Message LumashiveAI'
          className='form-control border border-primary'
        />
        <button 
          type='submit'
          className='btn btn-primary'
        > <i className='bi bi-arrow-bar-up'></i>
        </button>
      </div>
    </form>
  )
}

export default ChatInput
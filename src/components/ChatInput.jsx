import React from "react";

const ChatInput = ({ handleChange, query, handleSubmit, loading }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="fixed-bottom p-3 bg-primary-subtle border-top shadow"
    >
      <div className="input-group container">
        <input
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Message LumashiveAI"
          className="form-control border border-primary"
          disabled={loading}
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {" "}
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;

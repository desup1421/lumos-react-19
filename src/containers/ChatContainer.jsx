import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import { queryAI, logout } from "../utils/api";
import Loading from "../components/Loading";

class ChatContainer extends Component {
  state = {
    messages: [],
    loading: false,
    error: null,
    query: "",
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({
      loading: true,
      error: null,
    });
    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, { query, data: res }],
          query: "",
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handleLogout = () => {
    logout(this.props.token)
      .then(() => {
        localStorage.removeItem("token");
        this.props.setToken();
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
        });
      });
  };

  render() {
    return (
      <div>
        <Navbar
          setToken={this.props.setToken}
          handleLogout={this.handleLogout}
        />

        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.data.data}
            query={message.query}
          />
        ))}
        {this.state.loading && <Loading />}
        <ChatInput
          handleChange={this.handleChange}
          query={this.state.query}
          handleSubmit={this.handleQuery}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default ChatContainer;

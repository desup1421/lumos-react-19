import React, { Component } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import Navbar from '../components/Navbar';
// import { queryAI } from '../utils/api';



class ChatContainer extends Component {
//   state = {
//     messages: [],
//     loading: false,
//     error: null,
// };

// handleQuery = (e) => {
//   e.preventDefault();
//     this.setState({
//         loading: true,
//         error: null,
//     });
//     queryAI({ query }, this.props.token)
//     .then((res) => {
//         this.setState({
//             messages: [...this.state.messages, res]
//         });
//     })
//     .catch((err) => {
//         this.setState({
//             error: err.response.data.error
//         })
//     })
//     .finally(() => {
//         this.setState({
//             loading: false,
//         });
//     });
//   }

//   handleChange = (e) => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value
//       }
//     });
//   }

  render() {
    return (
      <div>
        <Navbar setToken =  {this.props.setToken} />
        <ChatMessage />
        <ChatInput/>
      </div>
    );
  }
}

export default ChatContainer;
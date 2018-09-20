import React, { Component } from 'react';

import Api from 'services';

class App extends Component {
  state = {
    errorMessage: false,
    isLoading: true,
    membersList: []
  };

  async componentWillMount() {
    await Api.Github.getOrgMembers('reactjs')
      .then(res => {
        this.setState({
          isLoading: false,
          membersList: res.data
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errorMessage: 'Um erro aconteceu, tente novamente',
          isLoading: false,
          membersList: []
        });
      });
  }

  render() {
    const { errorMessage, isLoading, membersList } = this.state;
    return (
      <div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {isLoading ? 'Loading ...' : JSON.stringify(membersList)}
      </div>
    );
  }
}

export default App;

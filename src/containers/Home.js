import React, { Component } from 'react';

import Api from 'services';
import MemberList from 'components/MemberList';

class App extends Component {
  state = {
    errorMessage: false,
    isLoading: true,
    membersList: []
  };

  async componentWillMount() {
    const orgMembers = await Api.Github.getOrgMembers('reactjs')
      .then(res => res.data)
      .catch(() => this.setErrorStatus());

    await orgMembers.map(
      async member =>
        await Api.Github.getMember(member.login)
          .then(res => {
            this.setState(prevState => ({
              membersList: [...prevState.membersList, res.data]
            }));
          })
          .catch(() => this.setErrorStatus())
    );

    this.setState({
      errorMessage: false,
      isLoading: false
    });
  }

  setErrorStatus = () => {
    this.setState({
      errorMessage: 'Um erro aconteceu, tente novamente',
      isLoading: false,
      membersList: []
    });
  };

  render() {
    const { errorMessage, isLoading, membersList } = this.state;
    return (
      <div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {isLoading ? 'Loading ...' : <MemberList members={membersList} />}
      </div>
    );
  }
}

export default App;

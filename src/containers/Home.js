import React, { Component } from 'react';

import Api from 'services';
import MemberList from 'components/MemberList';
import isMemberSelected from 'utils/isMemberSelected';

class App extends Component {
  state = {
    errorMessage: false,
    isLoading: true,
    membersList: [],
    selectedMembers: []
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

  handleMemberSelect = memberId => {
    const { selectedMembers } = this.state;
    let newSelectedMembers;

    if (isMemberSelected(selectedMembers, memberId)) {
      newSelectedMembers = selectedMembers.filter(id => id !== memberId);
    } else {
      newSelectedMembers = [...selectedMembers, memberId];
    }

    this.setState({ selectedMembers: newSelectedMembers });
  };

  render() {
    const {
      errorMessage,
      isLoading,
      membersList,
      selectedMembers
    } = this.state;

    return (
      <div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {isLoading ? (
          'Loading ...'
        ) : (
          <MemberList
            members={membersList}
            selectedMembers={selectedMembers}
            handleMemberSelect={this.handleMemberSelect}
          />
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Api from 'services';
import MemberList from 'components/MemberList';
import Cart from 'components/Cart';
import isMemberSelected from 'utils/isMemberSelected';
import memberPrice from 'utils/memberPrice';

class Home extends Component {
  state = {
    errorMessage: false,
    isLoading: true,
    membersList: [],
    selectedMembers: []
  };

  componentDidMount() {
    Api.Github.getOrgMembers('reactjs')
      .then(res => {
        this.getMembersInfo(res.data);
      })
      .catch(() => this.setErrorStatus());
  }

  getMembersInfo = orgMembers => {
    if (!orgMembers) return;

    orgMembers.map(member =>
      Api.Github.getMember(member.login).then(res => {
        this.setState(prevState => ({
          isLoading: false,
          membersList: [...prevState.membersList, res.data]
        }));
      })
    );
  };

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

    const total = membersList
      .filter(member => isMemberSelected(selectedMembers, member.id))
      .reduce((sum, member) => sum + memberPrice(member), 0);

    return (
      <div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {isLoading ? (
          'Loading ...'
        ) : (
          <React.Fragment>
            <MemberList
              members={membersList}
              selectedMembers={selectedMembers}
              handleMemberSelect={this.handleMemberSelect}
            />
            <Cart total={total} selectedMembers={selectedMembers} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Home;

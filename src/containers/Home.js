import React, { Component } from 'react';

import Api from 'services';
import MemberList from 'components/MemberList';
import Cart from 'components/Cart';
import isMemberSelected from 'utils/isMemberSelected';
import memberPrice from 'utils/memberPrice';

class Home extends Component {
  mounted = false;

  state = {
    successMessage: false,
    errorMessage: false,
    isLoading: true,
    membersList: [],
    selectedMembers: []
  };

  componentDidMount() {
    this.mounted = true;

    Api.Github.getOrgMembers('reactjs')
      .then(res => {
        if (this.mounted) {
          this.getMembersInfo(res.data);
        }
      })
      .catch(() => {
        if (this.mounted) {
          this.setErrorStatus();
        }
      });
  }

  componentWillUnmount() {
    this.mounted = false;
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

  handleCheckout = qty => {
    const { selectedMembers } = this.state;
    this.setState({
      successMessage: `Congratulations, you buy ${
        selectedMembers.length
      } React.js developer${selectedMembers.length > 1 ? 's' : ''}!`
    });

    setTimeout(() => {
      this.setState({
        successMessage: false,
        selectedMembers: []
      });
    }, 3000);
  };

  render() {
    const {
      successMessage,
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
            <Cart
              total={total}
              selectedMembers={selectedMembers}
              handleCheckout={this.handleCheckout}
              successMessage={successMessage}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Home;

import axios from 'axios';

const PATH_API = 'https://api.github.com';
const AUTH = '?access_token=9f9d31e1282d1bc4306ab9a0c94614b82d3a2f2b';

const Github = {
  getOrgMembers: org => axios.get(`${PATH_API}/orgs/${org}/members${AUTH}`),
  getMember: login => axios.get(`${PATH_API}/users/${login}${AUTH}`)
};

export default Github;

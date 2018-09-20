import axios from 'axios';

const PATH_API = 'https://api.github.com';

const Github = {
  getOrgMembers: org => axios.get(`${PATH_API}/orgs/${org}/members`),
  getMember: login => axios.get(`${PATH_API}/users/${login}`)
};

export default Github;

import styled from 'styled-components';

export default styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  text-align: center;
  position: relative;
  overflow: hidden;
`;

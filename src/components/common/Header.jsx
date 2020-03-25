import styled from 'styled-components/native'

const Header = styled.SafeAreaView`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.WHITE};
  width: 100%;  
  height: 15%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-around'};
`

export default Header
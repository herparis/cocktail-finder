import styled, { css } from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: center;
  margin: ${({ marginHorizontal, marginVertical }) => (
    `${marginVertical || 0}px ${marginHorizontal || 0}px ${marginVertical || 0}px ${marginHorizontal || 0}px`
  )};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.WHITE};
  ${({ height }) => height && css `height: ${height}px;`}
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-basis: auto;
`
export default Container
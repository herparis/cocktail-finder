import styled, { css } from 'styled-components/native'

const ButtonCustom = styled.TouchableHighlight`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.WHITE};
  ${({ width }) => width && css`width: ${width}%;`};
  ${({ height }) => height && css`height: ${height}%;`};
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
  flex-direction: row;
  margin: ${({ marginHorizontal, marginVertical }) => (
    `${marginVertical || 0}px ${marginHorizontal || 0}px ${marginVertical || 0}px ${marginHorizontal || 0}px`
  )};
  padding: ${({ paddingHorizontal, paddingVertical }) => (
    `${paddingVertical || 0}px ${paddingHorizontal || 0}px ${paddingVertical || 0}px ${paddingHorizontal || 0}px`
  )};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  ${({ flex }) => flex && css`flex: 1`};
  flex-basis: auto;
`

export default ButtonCustom
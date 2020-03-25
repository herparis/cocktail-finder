import styled from 'styled-components/native'

const TextCustom = styled.Text`
  color: ${({ color, theme }) => color || theme.BLACK};
  font-size: ${({ size }) => size || 20}px;
  font-weight: ${({ weight }) => weight || 'normal'};
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
  ${({ width }) => width && { width: `${width}%` }};
  margin: ${({ marginHorizontal, marginVertical }) => (
    `${marginVertical || 0}px ${marginHorizontal || 0}px ${marginVertical || 0}px ${marginHorizontal || 0}px`
  )};
`
export default TextCustom
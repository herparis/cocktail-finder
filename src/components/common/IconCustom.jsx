import Icon from 'react-native-vector-icons/Fontisto'
import styled from 'styled-components/native'

const IconCustom = styled(Icon)`
  font-size: ${({ size }) => size || 30}px;
  color: ${({ color, theme }) => color || theme.WHITE};
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
  margin: ${({ marginHorizontal, marginVertical }) => (
    `${marginVertical || 0}px ${marginHorizontal || 0}px ${marginVertical || 0}px ${marginHorizontal || 0}px`
  )};
`

export default IconCustom

import styled from 'styled-components/native'

const ImageCustom = styled.Image`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: ${({ height }) => height ? `${height}px` : '100%'};
  position: ${({ position }) => position || 'absolute'};
  margin: ${({ marginHorizontal, marginVertical }) => (
    `${marginVertical || 0}px ${marginHorizontal || 0}px ${marginVertical || 0}px ${marginHorizontal || 0}px`
  )};
  border-radius: ${({ borderRadius }) => borderRadius || 0}px;
`

export default ImageCustom
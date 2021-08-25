import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #090b13;
  padding: 0 36px;
  z-index: 3;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const Wrapper = styled.div`
  display: flex;
`

export const ImageProfile = styled(Image)`
  border-radius: 50%;
`

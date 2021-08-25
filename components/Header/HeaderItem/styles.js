import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  margin-left: 32px;
`
export const Item = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 16px 18px;

  & p {
    font-size: 13px;
    margin-left: 8px;
    letter-spacing: 1.42px;
    text-transform: uppercase;
  }
`

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

    --border-color: rgb(249, 249, 249);
    --border-width: 2px;
    --bottom-distance: -1px;

    background-image: linear-gradient(var(--border-color), var(--border-color));
    background-size: 0% var(--border-width);
    background-repeat: no-repeat;
    transition: background-size 0.3s;
    background-position: 0 calc(100% - var(--bottom-distance));

    :hover {
      background-size: 100% var(--border-width);
    }
  }
`

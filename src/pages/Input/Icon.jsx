import styled from "styled-components";

export default function Icon({ color,children }) {
    return (
      <div>
        <StyledIcon background={color}>{children}</StyledIcon>
      </div>
    );
  }

const StyledIcon = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    margin-right: 30px;
    color: #ffffff;
    background: ${(props)=>props.background};
    cursor: pointer;
    svg{
        width: 2rem;
        height: 2rem;
    }
`;
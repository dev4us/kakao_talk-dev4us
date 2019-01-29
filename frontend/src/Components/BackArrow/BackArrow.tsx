import React from "react";
import { Link } from "react-router-dom";
import styled from "../../typed-components";

const Container = styled.div``;

interface IProps {
  id: string;
  backTo: string;
}

const Header: React.SFC<IProps> = ({ id, backTo }) => (
  <Container>
    <Link id={id} to={backTo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        height="18px"
        viewBox="0 0 408 408"
      >
        <g>
          <g id="arrow-back">
            <path
              d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </svg>
    </Link>
  </Container>
);

export default Header;

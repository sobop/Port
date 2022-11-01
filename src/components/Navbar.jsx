import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Nav, NavContainer, NavLi, NavUl } from "./Components.style";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <Nav>
      <NavContainer>
        <NavUl>
          <NavLi
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </NavLi>

          <Link to="1" spy={true} smooth={true} offset={-100}>
            <NavLi>About Me</NavLi>
          </Link>
          <Link to="2" spy={true} smooth={true} offset={-100}>
            <NavLi>Skills</NavLi>
          </Link>
          <Link to="3" spy={true} smooth={true} offset={-100}>
            <NavLi>Project</NavLi>
          </Link>
        </NavUl>
      </NavContainer>
    </Nav>
  );
}

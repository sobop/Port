import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
`;
export const NavContainer = styled.div`
  display: flex;
  max-width: 1280px;
  width: 90%;
  height: 80px;
  margin: 0 auto;
`;
export const NavUl = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavLi = styled.li`
  margin-right: 50px;
  cursor: pointer;
`;
export const MainContainer = styled.div`
  max-width: 1000px;
  margin: 80px auto 0;
  @media screen and (max-width: 1000px) {
    max-width: 800px;
  }
`;
export const Title = styled.div`
  font-size: 50px;
  padding: 20px;
  margin-top: 150px;
  margin-bottom: 80px;
  border-bottom: 1px solid rgb(228, 227, 226);
`;

// AboutMe
export const AboutMe = styled.div``;
export const AboutMeDiv = styled.div`
  display: flex;
`;
export const Img = styled.img`
  height: 300px;
`;
export const AboutMeBox = styled.p`
  padding: 40px;
  margin-left: 50px;
  font-size: 20px;
  line-height: 28px;
`;
export const Introduce = styled.div`
  margin-top: 50px;
  font-size: 20px;
  line-height: 28px;
`;

// Skills
export const Skills = styled.div``;
export const SkillImg = styled.img`
  margin-right: 20px;
`;
export const SkillTitle = styled.div`
  margin-left: 50px;
  margin-bottom: 30px;
  font-size: 30px;
  color: rgb(55, 53, 47);
`;
export const SkillList = styled.div`
  display: flex;
  margin: 50px 0 50px 50px;
  font-size: 18px;
`;
export const ListDiv = styled.div`
  margin-right: 20px;
`;

// Project
export const Project = styled.div`
  margin-bottom: 150px;
`;
export const PjDiv = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const PjImg = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid rgb(228, 227, 226);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;
export const PjBox = styled.div`
  padding: 30px;
`;
export const PjTitle = styled.p`
  font-size: 40px;
  margin-bottom: 20px;
`;
export const PjContents = styled.p`
  font-size: 20px;
  line-height: 28px;
`;
export const Button = styled.input`
  width: 150px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid rgb(228, 227, 226);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: #ffffff;
  margin-top: 40px;
  margin-right: 30px;
  font-size: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
    transition: 0.3s;
  }
`;
export const PjVideo = styled.video`
  width: 550px;
  height: 400px;
  margin-bottom: 100px;
  border-radius: 10px;
  border: 1px solid rgb(228, 227, 226);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

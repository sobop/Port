import {
  AboutMe,
  AboutMeBox,
  AboutMeDiv,
  Button,
  Img,
  Introduce,
  ListDiv,
  MainContainer,
  PjBox,
  PjContents,
  PjDiv,
  PjImg,
  PjTitle,
  Project,
  SkillImg,
  SkillList,
  Skills,
  SkillTitle,
  Title,
} from "./Components.style";
import Me from "./Image/Me.jpg";
import JavaScript from "./Image/javascript.png";
import TypeScript from "./Image/typescript.png";
import React from "./Image/react.png";
import Mui from "./Image/mui.png";
import Tailwind from "./Image/tailwind.png";
import StyledComponents from "./Image/styledcomponents.png";
import Git from "./Image/git.png";
import Github from "./Image/github.png";
import Jira from "./Image/jira.png";
import Notion from "./Image/notion.png";
import Starbucks from "./Image/starbucks.png";
import Paint from "./Image/paint.png";
import Pabi from "./Image/pabi.png";
import Modal from "./Modal";
import { useState } from "react";

export default function Container() {
  const PabiNotion =
    "https://flint-house-fc7.notion.site/PA-BI-951f4866ae704007bbda0ead81dc37a5";
  const Pabigit = "https://github.com/Government-Demo/demo/tree/main/pa_bi_web";
  const PabiMore = "https://seoportfolio.netlify.app/generic.html";
  const Painturl = "https://seoppaint.netlify.app";
  const Paintgit = "https://github.com/sobop/paintjs";
  const Starurl = "https://seopstarbucks.netlify.app";
  const Stargit = "https://github.com/sobop/Starbucks";

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <MainContainer>
      <AboutMe id="1">
        <Title>💼 About Me</Title>
        <AboutMeDiv>
          <Img src={Me} alt="Me" />
          <AboutMeBox>
            😀 이영섭 🎉 1998.10.26
            <br />
            <br />
            📧 lyn981026@naver.com
            <br />
            <br />
            📞 010-8520-5541
            <br />
            <br />
            <img
              src={Github}
              alt="github"
              style={{ width: "25px", marginRight: "5px" }}
            />
            <a
              href="https://github.com/sobop"
              target="_blank"
              style={{ textDecorationLine: "none" }}
            >
              https://github.com/sobop
            </a>
          </AboutMeBox>
        </AboutMeDiv>
        <Introduce>
          '호기심'이 많아 찾아보는 것을 좋아하는 개발자, 이영섭입니다.
          <br /> 최신 트렌드에 뒤쳐지지 않으면서, 더욱 성장해가는 개발자가 되고
          싶습니다.
        </Introduce>
      </AboutMe>
      <Skills id="2">
        <Title>🎨 Skills</Title>
        <SkillTitle>Language</SkillTitle>
        <SkillList>
          <ListDiv>
            <SkillImg src={JavaScript} alt="javascript" />
            JavaScript
          </ListDiv>
          <ListDiv>
            <SkillImg src={TypeScript} alt="typescript" />
            TypeScript
          </ListDiv>
        </SkillList>

        <SkillTitle>Framework / Library</SkillTitle>
        <SkillList>
          <ListDiv>
            <SkillImg src={React} alt="react" />
            React
          </ListDiv>
          <ListDiv>
            <SkillImg src={Mui} alt="mui" />
            Mui
          </ListDiv>
          <ListDiv>
            <SkillImg src={Tailwind} alt="tailwind" />
            Tailwind
          </ListDiv>
          <ListDiv>
            <SkillImg src={StyledComponents} alt="styledcomponents" />
            Styled Components
          </ListDiv>
        </SkillList>

        <SkillTitle>Tool</SkillTitle>
        <SkillList>
          <ListDiv>
            <SkillImg src={Git} alt="git" />
            Git
          </ListDiv>
          <ListDiv>
            <SkillImg src={Github} alt="github" />
            Github
          </ListDiv>
          <ListDiv>
            <SkillImg src={Jira} alt="jira" />
            Jira
          </ListDiv>
          <ListDiv>
            <SkillImg src={Notion} alt="notion" />
            Notion
          </ListDiv>
        </SkillList>
      </Skills>
      <Project id="3">
        <Title>💻 Project</Title>
        <PjDiv>
          <PjImg src={Pabi} alt="starbucks"></PjImg>
          <PjBox>
            <PjTitle>Pa-Bi</PjTitle>
            <PjContents>
              기간 : 22.04 ~ <br />
              중고 경매 플랫폼 사이트 팀 프로젝트 <br />
              <br />
              8월부터 Typescript 및 Tailwind 적용 및 전체적으로 수정중
              <br />
              ※ 아래 링크는 8월 이전에 활동했던 내용입니다.
              <br />
              <Button type="button" value="More" onClick={openModal}></Button>
              {modalVisible && (
                <Modal
                  visible={modalVisible}
                  closable={true}
                  maskClosable={true}
                  onClose={closeModal}
                >
                  Hello
                </Modal>
              )}
              <Button
                type="button"
                value="Notion"
                onClick={() => {
                  window.open(PabiNotion);
                }}
              ></Button>
              <Button
                type="button"
                value="Github"
                onClick={() => {
                  window.open(Pabigit);
                }}
              ></Button>
            </PjContents>
          </PjBox>
        </PjDiv>
        <PjDiv>
          <PjImg src={Starbucks} alt="starbucks"></PjImg>
          <PjBox>
            <PjTitle>Starbucks</PjTitle>
            <PjContents>
              HTML, CSS, JS를 활용한 <br />
              스타벅스 홈페이지를 클론코딩 해봤습니다.
              <br />
              <Button
                type="button"
                value="Site"
                onClick={() => {
                  window.open(Starurl);
                }}
              ></Button>
              <Button
                type="button"
                value="Github"
                onClick={() => {
                  window.open(Stargit);
                }}
              ></Button>
            </PjContents>
          </PjBox>
        </PjDiv>
        <PjDiv>
          <PjImg src={Paint} alt="paint"></PjImg>
          <PjBox>
            <PjTitle>Pa-Bi</PjTitle>
            <PjContents>
              굵기 기능, 채우기 기능과 저장하기 기능이 있는 그림판입니다.
              <Button
                type="button"
                value="Site"
                onClick={() => {
                  window.open(Painturl);
                }}
              ></Button>
              <Button
                type="button"
                value="Github"
                onClick={() => {
                  window.open(Paintgit);
                }}
              ></Button>
            </PjContents>
          </PjBox>
        </PjDiv>
      </Project>
    </MainContainer>
  );
}

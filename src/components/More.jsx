import {
  MainContainer,
  PjBox,
  PjContents,
  PjDiv,
  PjTitle,
  PjVideo,
} from "./Components.style";
import List from "./Image/리스트.mp4";
import Login from "./Image/로그인.mp4";
import Write from "./Image/글쓰기.mp4";
import Main from "./Image/메인.mp4";

export default function More() {
  return (
    <MainContainer style={{ marginTop: "150px" }}>
      <PjTitle>메인 페이지</PjTitle>
      <PjDiv>
        <PjVideo loop autoPlay>
          <source src={Main} type="video/mp4" />
        </PjVideo>
        <PjBox>
          <PjContents>
            - axios를 이용해 데이터를 출력했습니다. <br /> - React router dom
            라이브러리를 사용하여 <br /> Link와 useNavigate를 이용해 페이지
            이동을 가능하게 했습니다.
          </PjContents>
        </PjBox>
      </PjDiv>
      <PjTitle>리스트 페이지</PjTitle>
      <PjDiv>
        <PjVideo loop autoPlay>
          <source src={List} type="video/mp4" />
        </PjVideo>
        <PjBox>
          <PjContents>
            - 필터를 이용해 카테고리에 맞는 리스트를 출력했습니다. <br />-
            useState를 이용하여 데이터의 상태를 관리합니다.
          </PjContents>
        </PjBox>
      </PjDiv>
      <PjTitle>로그인 페이지</PjTitle>
      <PjDiv>
        <PjVideo loop autoPlay>
          <source src={Write} type="video/mp4" />
        </PjVideo>
        <PjBox>
          <PjContents>
            - 각 항목을 입력하여 데이터를 저장할 수 있는 페이지를
            만들어봤습니다.
          </PjContents>
        </PjBox>
      </PjDiv>
      <PjTitle>글쓰기 페이지</PjTitle>
      <PjDiv>
        <PjVideo loop autoPlay>
          <source src={Login} type="video/mp4" />
        </PjVideo>
        <PjBox>
          <PjContents>
            - Modal 창을 이용해 로그인과 회원가입이 전환되게 해봤습니다.
          </PjContents>
        </PjBox>
      </PjDiv>
    </MainContainer>
  );
}

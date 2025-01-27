
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세",imgurl:"https://drive.google.com/file/d/1NXPYGbGZHcReeObo66VbO6OC_yKTkso_/view?usp=drive_link",imglog:"사용자의 요구사항을 인터뷰, 설문지등의 방법으로 조사하여 분석할 수 있다.",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/15GgAeFgW1Cxctk9PbJagUNfG2UkEU4WS/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1HRUQhj2Tk6AzIW_NSRD59wGUAduJYTmW/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:""})//이미지타이틀


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1mw6ZBtTbbZQYlfz1YQXCuTfoi-hnvfpg/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1vl3Ridea05eDn3Hx0cfIWzgkPi-vQX31/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1vlxyuzBmzaBk7B9VoycUH0mRBBxe4nTr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1yLXiqHWblzxAnZXGZKvRcxU8HSgf3UqS/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1yLXiqHWblzxAnZXGZKvRcxU8HSgf3UqS/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀
//d2.set_content("테스트케이스를 작성합니다.")
//d2.set_content("단위테스트를 작성합니다.")

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"회원가입폼",
	imgurl:"https://drive.google.com/file/d/1eHAnqiMIgRePGw-QOiezVF4EbHxe_KKZ/view?usp=drive_link",
	imglog:"회원가입 할수있는 폼 ",
	sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 진행",
	imgurl:"https://drive.google.com/file/d/1x9xZx8YN7mWP6b_xlmSpMKgOw1yPWeAA/view?usp=drive_link",
	imglog:"회원데이터 입력 ",
	sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"데이터 송신(클라이언트)",
	imgurl:"https://drive.google.com/file/d/16ZnJiWRGL-KETJ8n3DEke47y2aNTpB2S/view?usp=drive_link",
	imglog:"회원이 입력한 데이터를 서버측에 송신한다 ",
	sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"데이터 수신 (서버)",
	imgurl:"https://drive.google.com/file/d/1af8sYPv6uGloQQrgwMDmLz5XMNf-wrS6/view?usp=drive_link",
	imglog:"회원이 입력한 데이터를 서버에서 수신한다 ",
	sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"DAO 접근",
	imgurl:"https://drive.google.com/file/d/1ISVu_V-rargtFKGnTFI2dV1U5WJ1rWTA/view?usp=drive_link",
	imglog:"DAO객체를 이용하여 데이터베이스에 접근한다 ",
	sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/tree/main/LoginSystem/src/main/java/com/itg/examp/dao"})//이미지타이틀
d3.set_img(0,{imgtitle:"맵퍼에 의한 쿼리",
	imgurl:"https://drive.google.com/file/d/1E2LpN2YZ-xlcYhUwHjbry8aSgzjbgt8Z/view?usp=drive_link",
	imglog:"맵퍼xml로 데이터베이스에 데이터 입력 ",
	sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 성공",
	imgurl:"https://drive.google.com/file/d/1wx2ltXaHZkqajfrghsoN1u8BSvPZMv2G/view?usp=drive_link",
	imglog:"가입성공메시지 출력 ",
	sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원데이터베이스 확인",
	imgurl:"https://drive.google.com/file/d/1MmxjnWfMTmuscTahAYi5cyM9tnUrgYeS/view?usp=drive_link",
	imglog:"가입된 회원정보가 데이토베이스에 입력 확인 ",
	sourceurl:""})//이미지타이틀
//d3.set_img(0,{imgtitle:"",
//	imgurl:"",
//	imglog:"",
//	sourceurl:""})//이미지타이틀
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"로그인 데이터 입력",
imgurl:"https://drive.google.com/file/d/18fOCrDMBF90Lsqsc2OG4W4lrg7GkPu99/view?usp=drive_link",
imglog:"회원 아이디와 비밀번호를 클라이언트 화면에서 입력한다.",
sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"회원 정보 서버로 송신",
imgurl:"https://drive.google.com/file/d/1mG8SlHVB4eFZsftwsbSPsii7JUV61IRt/view?usp=drive_link",
imglog:"로그인 하기 위한 아이디와 비밀번호 정보를 서버로 송신한다.",
sourceurl:"https://github.com/dmsgur/loginsystem/blob/codeone/LoginSystem/src/main/resources/static/index.html"})//이미지타이틀
d3.set_img(1,{imgtitle:"전송된 로그인 정보 수신",
imgurl:"https://drive.google.com/file/d/1KljdKRw_IKaYr4FZhI0ietGK6_grcBqY/view?usp=drive_link",
imglog:"클라이언트에서 전송된 로그인 정보를 서버에서 수신하여 처리한다.",
sourceurl:"https://github.com/dmsgur/loginsystem/blob/codeone/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(1,{imgtitle:"DAO 객체 메소드 실행",
imgurl:"https://drive.google.com/file/d/1nRKKxg9KGuagwZkmm-vCWhOYDCkMuEwi/view?usp=drive_link",
imglog:"데이터베이스 접근을 위해 DAO 객체의 메소드를 실행한다.",
sourceurl:"https://github.com/dmsgur/loginsystem/blob/codeone/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})//이미지타이틀
d3.set_img(1,{imgtitle:"데이터베이스 매퍼쿼리",
imgurl:"https://drive.google.com/file/d/1pbvB2gbh4BTjfuLjOgDJhKmcv_M1s3LM/view?usp=drive_link",
imglog:"매퍼에 의해서 데이터베이스 쿼리를 실행하여 결과값을 받는다.",
sourceurl:"https://github.com/dmsgur/loginsystem/blob/codeone/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인성공화면",
imgurl:"https://drive.google.com/file/d/1ND-7KNEICS0wLlRl10gPOeoXEOwyocCU/view?usp=drive_link",
imglog:"로그인 성공 화면을 출력함.",
sourceurl:""})//이미지타이틀

d3.set_content("회원로그아웃 구현")
d3.set_img(2,{imgtitle:"로그인화면",
imgurl:"https://drive.google.com/file/d/1Ja_AS4SdN4L5X1BMw0IkeBPOyRzQ_Vjj/view?usp=drive_link",
imglog:"로그인을 하기 위해 아이디와 비밀번호를 입력한다.",
sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그인성공화면",
imgurl:"https://drive.google.com/file/d/1QjNboNyl5p6fppXWKKdVprtlKoXA3EMr/view?usp=drive_link",
imglog:"로그인 성공 화면을 출력함.",
sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃요청송신",
imgurl:"https://drive.google.com/file/d/1-IgjoRlpC_eAK6wK4VBER8_SXQYOeCU2/view?usp=drive_link",
imglog:"로그아웃정보송신코드",
sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/index.html"})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃정보서버수신",
imgurl:"https://drive.google.com/file/d/1zWu8T3KervdwzAR85WsP9y_borJTw9Tz/view?usp=drive_link",
imglog:"로그아웃하기위해서 서버에서 로그아웃정보를 수신하여 세션을 해제한다.",
sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃완료",
imgurl:"https://drive.google.com/file/d/1XRXry0PoxU1oBFKN1gdNivUvIgQRwTe0/view?usp=drive_link",
imglog:"로그아웃정보를 수신했고 정상적으로 로그아웃하였습니다.",
sourceurl:""})//이미지타이틀

//d3.set_content("회원리스트연동")
d3.set_content("회원리스트 출력 구현")
d3.set_img(2,{imgtitle:"회원리스트 출력 전",
imgurl:"https://drive.google.com/file/d/1PLkiypVDBoJrll0kuKeWifeVEpUj1Oxj/view?usp=drive_link",
imglog:"회원리스트 출력을 위해 회원리스트보기 버튼을 클릭하고자 합니다.",
sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"회원리스트요청송신",
imgurl:"https://drive.google.com/file/d/103VOpBmn-MN8sCqiRDPpYjXcj6Zj0IEe/view?usp=drive_link",
imglog:"회원리스트요청을 송신하는 코드입니다.",
sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})//이미지타이틀
d3.set_img(2,{imgtitle:"회원리스트요청정보 서버수신",
imgurl:"https://drive.google.com/file/d/1HYgNF36KK0sKkevXDmM0BFeessbaYWKA/view?usp=drive_link",
imglog:"회원리스트요청을 서버가 수신하여 회원리스트정보를 출력합니다.",
sourceurl:"https://github.com/rjtlrlajtlrl/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(2,{imgtitle:"회원리스트 출력",
imgurl:"https://drive.google.com/file/d/19lDCiDcHt0cYpCnBfXCqtWqIadiUBOET/view?usp=drive_link",
imglog:"회원리스트가 출력되어 회원들의 정보가 표시되었습니다.",
sourceurl:""})//이미지타이틀
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)

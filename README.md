# HappyHouse_FrontEnd
### HappyHouse 반응형 웹페이지 구현

## Main Page
![메인화면](https://user-images.githubusercontent.com/54715744/132031203-959b24fb-2834-424e-9e12-29cb7daceaa8.PNG)
* 네비게이션 바
  * HappyHouse (Main page)
  * 동별 거래가
  * 아파트별 거래가
  * 회원 가입 (Modal)
  * 로그인
* 로그인 성공 시 회원가입과 로그인 버튼 대신 *회원 정보* 와 *로그아웃* 버튼

## 동별 거래가 | 아파트별 거래가
![거래가](https://user-images.githubusercontent.com/54715744/132032321-083a7315-a55e-421f-b638-b96e38ad0bfc.PNG)
* 임의 데이터 사용
* *dropdown* 이용하여 위치 선택 가능
* 거래 정보 (왼쪽)
* *Google Map API* 를 이용하여 선택된 위치로 이동 및 아파트 마커
  * 마커 클릭 시 zoom in 과 동시에 해당 건물 이름 표시

## 회원가입
![회원가입](https://user-images.githubusercontent.com/54715744/132031533-6dd856ee-6501-435e-a862-e50f1544f3bf.PNG)
* Validation
  * 빈칸 제출 시 *alert*

## 회원정보
![회원정보](https://user-images.githubusercontent.com/54715744/132031684-e416d2c5-ee97-4af4-9604-4c3677c7c3c0.PNG)
* 수정
  * 정보 수정 가능 (Modal)
* 삭제
  * 탈퇴 *alert* 후 로그아웃 상태로 Main page 이동

## 정보수정
![정보수정](https://user-images.githubusercontent.com/54715744/132031974-a54004ea-e428-44fe-8337-97196809fbea.PNG)
* 원하는 정보 수정 가능
  * *placeholder* 이용하여 기존 정보를 볼 수 있음
  * 회원 정보에 즉각 반영

## 반응형 웹페이지
<p align="center"><img src="https://user-images.githubusercontent.com/54715744/132033165-f27d8e87-1285-44a0-81b7-b4a0ef73a7b0.PNG" width="40%" height="40%"></p>

* 화면 사이즈에 따라 네비게이션 바 변화

---
## Contributor
* 이지우
* 임상순

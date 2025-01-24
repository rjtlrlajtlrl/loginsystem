package com.itg.examp;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.Session;

@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	MemberDAO dao;
	@Autowired
	MemberService service;
	@PostMapping("/signup")
	public Map<String, Object> signupMember(MemberDTO member) {
		// id 는 4 글자이상 pw 6글자 이상으로 입력되게		
		System.out.println(member.toString());
		boolean ckid = service.checkId(member.getMid());
		boolean ckpw = service.checkPassword(member.getMpw());
		HashMap<String, Object> hm = new HashMap<>();
		if(!ckid) {
			hm.put("message", "아이디를 점검하세요");
		}
		if(!ckpw) {
			hm.put("message", "비밀번호를 점검하세요");
		}
		int res = dao.signupMember(member);
		if(res==1) {
			member.setMpw("");
			hm.put("message", "회원가입성공");
			hm.put("data", member);
			System.out.println(member.getName()+" 회원 가입성공");
			
		}else {
			hm.put("message", "회원가입실패 관리자 문의");
			System.out.println("회원가입실패");
		}
		return hm;
	}
	@PostMapping("/login")
	public Map signin(HttpServletRequest request, @RequestBody Map<String,String> logindata) {
		System.out.println(logindata);
		HashMap<String, Object> hm = new HashMap<>();
		//로그인 검증
		
		HttpSession auth =  request.getSession(true);
		hm.put("message", logindata);
		return hm;
		
	}
	@GetMapping("/logout")
	public void signout() {}
	@GetMapping("/listview")
	public void listView() {}
}



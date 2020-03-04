package bookshop.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//명령어의 진입점. 슈퍼 인터페이스 추상메소드
public interface CommandAction {
	public String requestPro(HttpServletRequest request, HttpServletResponse response)throws Throwable;
}

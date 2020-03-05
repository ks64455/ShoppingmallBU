package bookshop.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BookRegisterFormAction implements CommandAction {

	@Override
	public String requsetPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		// TODO Auto-generated method stub

		request.setAttribute("type", new Integer(0));
		return "/mngr/productProcess/bookRegisterForm.jsp";
	}

}

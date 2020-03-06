$(document).ready(function() {
	
	//[책 등록] 버튼 클릭
	$("#upForm1").ajaxForm({//이미지를 포함한 상품 등록
		success: function(data, status) { //업로드에 성공하면 수행
			window.location.href="/shoppingmall/mg/bookList.do?book_kind=all";
		}
	}); //[책 등록] 버튼 클릭 end
	
	
	//[관리자 메인으로]버튼 클릭
	$("#bookMain").click(function() {
		window.location.href="/shoppingmall/mg/managerMain.do";
	});//[관리자 메인으로]버튼 클릭 end
	
	//[목록으로] 버튼 클릭
	$("#bookList").click(function() {
		window.location.href="/shoppingmall/mg/bookList.do?book_kind=all";
	}); //[목록으로] 버튼 클릭 end
});
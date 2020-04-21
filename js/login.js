document.cookie = "";
function loginClick(){
	if ($("#form_name").val().trim() != "" && $("#form_tel").val().trim() != "" && $("#form_pwd").val().trim() != "") {
        document.cookie = $("#form_name").val();
        window.location.href = "index.html";
	}
}
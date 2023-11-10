document.getElementById("login-button").addEventListener("click", function (event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const rememberCheckbox = document.getElementById("remember");

    rememberCheckbox.checked = false;
    
    if (username && password) {
        const urlParams = new URLSearchParams(window.location.search);
        const actor = urlParams.get("actor");
    
        var loginPage = "";
    
        // Định nghĩa đường dẫn tới trang đăng nhập dựa trên vai trò (actor) đã trích xuất
        if (actor === "student") {
                loginPage = "../HomePage/homePageStudent.html";
        } else if (actor === "teacher") {
                loginPage = "../HomePage/homePageTeacher.html";
        } else if (actor === "admin") {
                loginPage = "../Adminpage/Adminpage.html";
        } else if (actor === "staff") {
                loginPage = "../Staffpage/Staffpage.html";
        }
    
        // Chuyển hướng đến trang đăng nhập tương ứng
        window.location.href = loginPage;
    } else {
        // Hiển thị thông báo hoặc thực hiện xử lý khác nếu có lỗi
        alert("Vui lòng điền đầy đủ thông tin.");
    }
    // Ngăn chặn hành động mặc định của nút submit trong form
    event.preventDefault();
});
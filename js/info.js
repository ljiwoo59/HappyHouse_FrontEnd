$(function() {
    $("#dong").click(function () {
        window.open("2.html", "_parent");
      });
      $("#apt").click(function () {
        window.open("3.html", "_parent");
      });
      
    $('button#login').click(function() {
        var id = $('input#id').val();
        var pw = $('input#pw').val();

        if (id != "" && pw != "") {
            alert("로그인 성공");
            $('#loginForm').attr('style', 'display:none');
            $('#logoutForm').attr('style', 'display:inline');
        }
        else alert("ID/PW 를 입력해 주세요");
        $('input#id').val("");
        $('input#pw').val("");
    })

    $('button#logout').click(function() {
        alert("로그아웃 되었습니다");
        $('#loginForm').attr('style', 'display:inline');
        $('#logoutForm').attr('style', 'display:none');
        open("main1.html", "_parent");
    })

    $('button#info').click(function() {
        open("4.html", "_parent");
    })

    $('button#register').click(function() {
        var id = $('#nid').val();
        var pw = $('#npw').val();
        var name = $('#name').val();
        var address = $('#address').val();
        var tel = $('#tel').val();

        if (id != "" && pw != "" && name != "" && address != "" && tel != "") {
            $('button#register').attr('data-dismiss', 'modal');
            $('#nid').val("");
            $('#npw').val("");
            $('#name').val("");
            $('#address').val("");
            $('#tel').val("");
            alert("가입 되셨습니다");
        }
        else 
            alert("빈칸을 채워주세요");
    })

    $('button#remove').click(function() {
        alert("탈퇴 되셨습니다");
        $('#loginForm').attr('style', 'display:inline');
        $('#logoutForm').attr('style', 'display:none');
        open("main1.html", "_parent");
    })

    $('button#editted').click(function() {
        var id = $('#nid').val();
        var pw = $('#npw').val();
        var name = $('#name').val();
        var address = $('#address').val();
        var tel = $('#tel').val();

        if (id != "")
            $('#tid').html(id);
        if (pw != "")
            $('#tpw').html(pw);
        if (name != "")
            $('#tname').html(name);
        if (address != "")
            $('#taddress').html(address); 
        if (tel != "")
            $('#ttel').html(tel); 
        $('button#editted').attr('data-dismiss', 'modal');
    })
})
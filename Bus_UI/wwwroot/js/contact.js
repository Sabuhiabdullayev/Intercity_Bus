$(document).ready(function () {
    $("#btnAdd").click(function () {
        $("#btnAdd").attr("disabled", true);
        $("#btnAdd").html("Göndərilir...");
        let contact = {
            Name: $("#Name").val(),
            Email: $("#Email").val(),
            Subject: $("#Subject").val(),
            Content: $("#Content").val()
        };
        $.ajax({
            type: "post",
            url: "/ContactUs/ContactAdd/",
            data: contact,
            success: function (func) {
                $("#btnAdd").attr("disabled", false);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Mesajınız göndərildi",
                    showConfirmButton: false,
                    timer: 1500
                });
                $("#btnAdd").html("Göndərildi.");
                $("#Name").val("");
                $("#Email").val("");
                $("#Subject").val("");
                $("#Content").val("");
                $("#btnAdd").html("Göndər");
            }
        });
    });
});


$(document).ready(function () {
    chekfullcode();
    let today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = year + '-' + month + '-' + day;

    var fromWhere = $("#fromWhere").val();
    var toWhere = $("#toWhere").val();
    var departureDate = $("#departureDate").val();
    var departureHour = $("#departureHour").val();
    let list = {
        FromWhere: fromWhere,
        ToWhere: toWhere,
        DepartureDate: departureDate,
        DepartureHour: departureHour
    };
    $(".btnAdd").click(function () {
        var fullName = $("#name").val() + $("#surname").val();
        let AddData = {
            PostingDate: today.toString(),
            FullName: fullName,
            IdentityNumber: $("#identitynumber").val(),
            Email: $("#email").val(),
            Phone: $("#phone").val(),
            FromWhere: fromWhere,
            ToWhere: toWhere,
            Seat: $(".click-seat").html(),
            DepartureDate: departureDate,
            DepartureHour: departureHour,
            Price: $("#price").html()
        };

        if (!$("#name").val() && !$("#surname").val() && !$("#identitynumber").val() && !$("#phone").val()) {
            alert("Xanalari hamisini doldurun");

        } else {
            $.ajax({
                type: "post",
                url: "/Passengers/ByATicket/",
                data: AddData,
                success: function (func) {
                    alert("Bilet Alindi");
                    $(".modalclick").click();
                }
            });
        }
    });




    var count = 24;
    var seats = [];

    // AJAX isteği yapıyoruz

    $.ajax({
        type: "Get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/Passengers/AllList/",
        data: list,
        success: function (func) {
            $.each(func, (index, value) => {
                seats.push(parseInt(value.seat));


            });
            $("#fullseat").html(func.length);
            $("#emptyseat").html(count - func.length);

            renderSeats();
        }
    });

    function renderSeats() {
        for (var i = 1; i <= 24; i++) {
            var seatElement = $("#bus-seat-" + i);

            if (seats.includes(i)) {
                seatElement.empty().append(' <label>' +
                    '<input type="radio" class="bus-seat-radio-full" value="' + i + '" checked>' +
                    ' <img src="/icon/seat.png" class="seat-img" >' +
                    ' </label>');
            } else {
                seatElement.empty().append(' <label>' +
                    ' <input type="radio" class="bus-seat-radio" value="' + i + '" name="seat">' +
                    ' <img src="/icon/seat.png" class="seat-img" >' +
                    ' </label>');
            }
        }
    }


});

function chekfullcode() {

    $(".modalclick").click(function () {
        $('#exampleModalCenter').modal('show');
        var where = $("#fromWhere").val();
        var to = $("#toWhere").val();
        var date = $("#departureDate").val();
        var hour = $("#departureHour").val();
        var passengername = $("#name").val();
        var surname = $("#surname").val();
        var fincode = $("#identitynumber").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var seat = $(".click-seat").html(); // Changed to innerText
        var price = $("#price").html(); // Changed to innerText
        $("#exampleModalCenter").html(
            '<div class="modal-dialog modal-dialog-centered" role="document">' +
            '<div class="modal-content" >' +
            '<div class="modal-header">' +
            '<h5 class="modal-title text-center" id="exampleModalLongTitle">Gediş Çeki...</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>' +
            '<div class="modal-body" >' +
            '<main class="ticket-system" id="exportArea">' +
            '<div class="top">' +
            '<div class="printer">' +
            '</div>' +
            '<div class="receipts-wrapper">' +
            '<div class="receipts">' +
            '<div class="receipt">' +

            '<img src="/icon/bus.jpg" class="airliner-logo"  alt="">' +
            '<div class="route">' +
            '<h3>' + where + '</h3>' +

            '<img src="/icon/bus-left.png" class="plane-icon" alt="">' +
            '<h3>' + to + '</h3>' +
            '</div>' +
            '<div class="details">' +
            '<div class="item">' +
            '<span>Şəxsiyyət No:</span>' +
            '<h3>' + fincode + '</h3>' +
            '</div>' +

            '<div class="item"></div>' +
            '<div class="item">' +
            '<span>Sərnişin Adı.</span>' +
            '<h3 id="receipt-passenger-name">' + passengername + " " + surname + '</h3>' +
            '</div>' +
            '<div class="item">' +
            '<span>Yer</span>' +
            '<h3>' + seat + '</h3>' +
            '</div>' +
            '<div class="item">' +
            '<span>Getmə tarix</span>' +
            '<h3>' + date + " " + hour + '</h3>' +
            '</div>' +
            '<div class="item">' +
            '<span>Çatma saat</span>' +
            '<h3>15:03</h3>' +
            '</div>' +
            '<div class="item">' +
            '<span>Email</span>' +
            '<h5>' + email + '</h5>' +
            '</div>' +
            '<div class="item">' +
            '<span>Gediş Haqqı</span>' +
            '<h2>' + price + ' ₼</h2>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="receipt">' +
            '<div class="receipt-footer">' +
            '<div id="qrcode"></div>' +
            '<div class="description">' +
            '<h2>haqqında</h2>' +
            '<p>QR-code ilə yoxlamaq</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</main>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" id="exportImage" class="btn btn-primary">Çeki Al</button>' +
            '</div>' +
            '</div>' +
            '</div>');
        chek();
        let website = "Ad" + "-" + passengername + "  " + "Soyad" + "-" + surname + "  " + "Fincode" + "-" + fincode +
            "  " + "Yeriniz" + "-" + seat + "  " + "Email" + "-" + email + "  " + "Telefon-No" + "-" + phone;

        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, {
            text: website,
            width: 100, // QR kodunun genişliği
            height: 100 // QR kodunun yüksekliği
        });
        document.getElementById("qrcode-container").style.display = "block";

    });

    function chek() {

        function exportClick(e) {
            e.preventDefault();
            var passengername = $("#name").val();
            var surname = $("#surname").val();

            convert2image(passengername); // Pass passenger name to the function
        }

        var exportBtn = document.getElementById("exportImage");
        exportBtn.addEventListener("click", exportClick);


    }

    function convert2image(passengername) { // Receive passengername as parameter
        // make sure this ID matches the ID of the area you want to export
        domtoimage.toJpeg(document.getElementById("exportArea"), {
            quality: 0.95
        })
            .then(function (dataUrl) {
                // this actually makes the download "happen"
                var link = document.createElement("a");
                // you can name the file whatever you'd like
                // this is the file the user sees when downloading
                link.download = passengername + "_avtobus-bleti" + ".jpeg";
                link.href = dataUrl;
                link.click();
            });

    }
}

var adultCountSpan = document.getElementById('adult-count');
var adultMnButton = document.getElementById('adult-mn');
var adultPlButton = document.getElementById('adult-pl');
var kidCountSpan = document.getElementById('kid-count');
var kidMnButton = document.getElementById('kid-mn');
var kidPlButton = document.getElementById('kid-pl');
var checkDatebtn = document.getElementById('checkdate-btn');
var notiValidate=document.getElementById('validation-notes');
var openBtn=document.getElementById('open-btn');
var sidebarMenu=document.getElementById('sidebar-menu');
var closeBtn=document.getElementById('close-btn');
var oversLay=document.getElementById('overs-lay');
openBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
    sidebarMenu.style.left='0';
    sidebarMenu.style.opacity='1';
    sidebarMenu.style.visibility='visible';
    oversLay.style.visibility='visible';
});
closeBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
    sidebarMenu.style.left='-300px';
    sidebarMenu.style.opacity='0';
    sidebarMenu.style.visibility='hidden';
    oversLay.style.visibility='hidden';
});
function compareDate() {
    var dateInput1 = new Date(document.getElementById('hasDatepicker1').value);
    var dateInput2 = new Date(document.getElementById('hasDatepicker2').value);
    if(dateInput1>dateInput2){
        notiValidate.style.display='block';
    }else{
        notiValidate.style.display='none';
    }
}

// Định nghĩa hàm giảm giá trị
function decreaseCount() {
    var currentCount = parseInt(adultCountSpan.innerHTML);
    if (currentCount > 0) {
        adultCountSpan.innerHTML = currentCount - 1;
    }
}

// Định nghĩa hàm tăng giá trị
function increaseCount() {
    var currentCount = parseInt(adultCountSpan.innerHTML);
    adultCountSpan.innerHTML = currentCount + 1;
}
// Định nghĩa hàm giảm giá trị cho "kid"
function decreaseKidCount() {
    var currentCount = parseInt(kidCountSpan.innerHTML);
    if (currentCount > 0) {
        kidCountSpan.innerHTML = currentCount - 1;
    }
}

// Định nghĩa hàm tăng giá trị cho "kid"
function increaseKidCount() {
    var currentCount = parseInt(kidCountSpan.innerHTML);
    kidCountSpan.innerHTML = currentCount + 1;
}

// Gán sự kiện click cho nút giảm và tăng
adultMnButton.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
    decreaseCount();
});

adultPlButton.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
    increaseCount();
});

// Gán sự kiện click cho nút giảm và tăng cho "kid"
kidMnButton.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
    decreaseKidCount();
});

kidPlButton.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện click
    increaseKidCount();
})
checkDatebtn.addEventListener('click', function (event) {
    event.preventDefault();
    compareDate();
})
var inforBtn = document.querySelectorAll('.fa-info');
var inforPart = document.getElementById('infor-part');
var closeBtn = document.getElementById('close-btn');
inforBtn.forEach(function (row) {
    row.addEventListener('click', function (event) {
        event.preventDefault();
        inforPart.classList.add('show');
    });
});
closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    inforPart.classList.remove('show');
});
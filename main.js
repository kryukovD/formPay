$(document).ready(function(){
    $('.main__btn').magnificPopup({
        type:'inline',
        midClick: true 
      });
    $('#formPay').validate({
        rules: {
          name: "required",
          family:"required",
          email: {
            required: true,
            email: true
          },
          phone:{
            required:true,
            digits:true,
            maxlength:13
          }
        },
        messages: {
          name: "Введите свое имя",
          family:"Введите свою фамилию",
          email: {
            required: "Укажите email",
            email: "Email формата name@domain.com"
          },
          phone:{
            required:"Введите телефон",
            digits:"Только цифры",
            maxlength:"Длина максимум 13 символов"
          }
        }
      })
});
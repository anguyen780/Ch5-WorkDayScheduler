// var saveButton = $('#save-btn');
// var saveButton2 = $('#save-btn2');
// var saveButton3 = $('#save-btn3');
// var saveButton4 = $('#save-btn4');
// var saveButton5 = $('#save-btn5');
// var saveButton6 = $('#save-btn6');
// var saveButton7 = $('#save-btn7');
// var saveButton8 = $('#save-btn8');
// var saveButton9 = $('#save-btn9');
var infoEl = $('#info-form');
var infoEl2 = $('#info-form2');
var infoEl3 = $('#info-form3');
var infoEl4 = $('#info-form4');
var infoEl5 = $('#info-form5');
var infoEl6 = $('#info-form6');
var infoEl7 = $('#info-form7');
var infoEl8 = $('#info-form8');
var infoEl9 = $('#info-form9');



$('#save-btn').click(saveWork)
function saveWork(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
}

$('#save-btn2').click(saveWork2)
function saveWork2(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl2.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn3').click(saveWork3)
function saveWork3(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl3.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn4').click(saveWork4)
function saveWork4(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl4.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn5').click(saveWork5)
function saveWork5(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl5.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn6').click(saveWork6)
function saveWork6(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl6.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn7').click(saveWork7)
function saveWork7(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl7.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn8').click(saveWork8)
function saveWork8(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl8.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}


$('#save-btn9').click(saveWork9)
function saveWork9(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl9.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}
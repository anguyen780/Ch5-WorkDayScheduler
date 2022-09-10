var saveButton = $('#save-btn');
var infoEl = $('#info-form');


saveButton.on('click', saveWork);

function saveWork(event){
    event.preventDefault();
    var infoInput = $.trim(infoEl.val())
    var savedInfo = JSON.parse(localStorage.getItem('infoInput')) || [];
    savedInfo.push(infoInput);
    localStorage.setItem("infoInput", JSON.stringify(savedInfo));
    
}
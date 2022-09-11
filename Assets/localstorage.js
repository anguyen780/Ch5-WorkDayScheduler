var saveBtn = $('[id=save-btn]') // targets all ids named 'save-btn'
// takes value of text area depending on which container was targeted and saves it into an array of objects
function saveWork(event){
    //targets certain taskbox depending on which button was clicked
    var btnId = $(event.target).parent().siblings('.input-group').attr('id');
    //depending on which time block the user is working on, this targets the value of the text area
    var textBoxVal = $(event.target).parent().siblings().children('textarea').val();
    var workArray = JSON.parse(localStorage.getItem('infoInput')) || [{}];
    // attaches an id value to certain object in array 
    workArray[0][btnId] = textBoxVal;
    localStorage.setItem('infoInput', JSON.stringify(workArray));
   
};

//this function assures that text area values stay on the page after reload
function savePage(){
   var storedInfo = JSON.parse(localStorage.getItem('infoInput'));
   var objectPos = storedInfo[0];
   var objectNum = Object.keys(objectPos);
   for (var i = 0; i < objectNum.length; i++) {
    $(`#${objectNum[i]}`).children('textarea').val(objectPos[objectNum[i]]);
   };

};

// event listener for the function saveWork
saveBtn.on('click', saveWork)
savePage();
const timeFormat = 'HH:mm:ss';
var today = moment();
var time1 = $('#t1');
var time2 = $('#t2');
var time3 = $('#t3');
var time4 = $('#t4');
var time5 = $('#t5');
var time6 = $('#t6');
var time7 = $('#t7');
var time8 = $('#t8');
var time9 = $('#t9');
var time10;

time1 = moment('09:00:00',timeFormat)
time2 = moment('10:00:00',timeFormat)
time3 = moment('11:00:00',timeFormat)
time4 = moment('12:00:00',timeFormat)
time5 = moment('13:00:00',timeFormat)
time6 = moment('14:00:00',timeFormat)
time7 = moment('15:00:00',timeFormat)
time8 = moment('16:00:00',timeFormat)
time9 = moment('17:00:00',timeFormat)
time10 = moment('18:00:00',timeFormat)

function timeCapture(){
    setInterval(function(){
        timeCheck();
        
    }, 1000);
}

$('#currentDay').text(today.format('MMMM Do YYYY'));


function timeCheck(){
    if( (moment().isBetween(time1, time2))){
        $('#t1-task-box').removeClass('future');
        $('#t1-task-box').addClass('present');
        
    } if( (moment().isBetween(time2, time3))){
        $('#t2-task-box').removeClass('future');
        $('#t2-task-box').addClass('present');
    
    } if( (moment().isBetween(time3, time4))){
        $('#t3-task-box').removeClass('future');
        $('#t3-task-box').addClass('present');
    
    } if( (moment().isBetween(time4, time5))){
        $('#t4-task-box').removeClass('future');
        $('#t4-task-box').addClass('present');
    
    } if( (moment().isBetween(time5, time6))){
        $('#t5-task-box').removeClass('future');
        $('#t5-task-box').addClass('present');
    
    } if( (moment().isBetween(time6, time7))){
        $('#t6-task-box').removeClass('future');
        $('#t6-task-box').addClass('present');
   
    } if( (moment().isBetween(time7, time8))){
        $('#t7-task-box').removeClass('future');
        $('#t7-task-box').addClass('present');
    
    } if( (moment().isBetween(time8, time9))){
        $('#t8-task-box').removeClass('future');
        $('#t8-task-box').addClass('present');
    
    } if( (moment().isBetween(time9, time10))){
        $('#t9-task-box').removeClass('future');
        $('#t9-task-box').addClass('present');
    

    
    } if( (moment().isBetween(time2, time10))){
        $('#t1-task-box').removeClass('future');
        $('#t1-task-box').removeClass('present');
        $('#t1-task-box').addClass('past');
        
    } if( (moment().isBetween(time3, time10))){
        $('#t2-task-box').removeClass('future');
        $('#t2-task-box').removeClass('present');
        $('#t2-task-box').addClass('past');
    
    } if( (moment().isBetween(time4, time10))){
        $('#t3-task-box').removeClass('future');
        $('#t3-task-box').removeClass('present');
        $('#t3-task-box').addClass('past');
    
    } if( (moment().isBetween(time5, time10))){
        $('#t4-task-box').removeClass('future');
        $('#t4-task-box').removeClass('present');
        $('#t4-task-box').addClass('past');
    
    } if( (moment().isBetween(time6, time10))){
        $('#t5-task-box').removeClass('future');
        $('#t5-task-box').removeClass('present');
        $('#t5-task-box').addClass('past');
    
    } if( (moment().isBetween(time7, time10))){
        $('#t6-task-box').removeClass('future');
        $('#t6-task-box').removeClass('present');
        $('#t6-task-box').addClass('past');
    
    } if( (moment().isBetween(time8, time10))){
        $('#t7-task-box').removeClass('future');
        $('#t7-task-box').removeClass('present');
        $('#t7-task-box').addClass('past');
    
    } if( (moment().isBetween(time9, time10))){
        $('#t8-task-box').removeClass('future');
        $('#t8-task-box').removeClass('present');
        $('#t8-task-box').addClass('past');
    
    } else {
        $('.past-div').attr('future');
    }
}

$(document).ready(timeCapture)



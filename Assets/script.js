const timeFormat = 'HH:mm:ss';
var today = moment();
var time1 = $('#t1');
var time2 = $('#t2');
var time10;
time10 = moment('18:00:00',timeFormat)
time1 = moment('09:00:00',timeFormat)
console.log(time10);

$('#currentDay').text(today.format('MMMM Do YYYY'));



if( (moment().isBetween(time1, time10))){
    console.log('helloworld');
    
} else {
    console.log('hello world');
}


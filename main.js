$(document).ready(function() {
      $('#generate').click(function() {
          const length = parseInt($('#length').val());
          let characters = '';
  
          if ($('#includeDigits').is(':checked')) {
              characters += '0123456789';
          }
          if ($('#includeUppercase').is(':checked')) {
              characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          }
          if ($('#includeLowercase').is(':checked')) {
              characters += 'abcdefghijklmnopqrstuvwxyz';
          }
  
          if (characters.length === 0) {
              alert('Please select at least one character type.');
              return;
          }
  
          let result = '';
          for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              result += characters[randomIndex];
          }
  
          $('#result').val(result);
      });
});

$('.container').css({
    'max-width': '400px',
    'margin': '0 auto'
});

$('label').css({
    'display':'block',
    'margin':'10px 0 5px'
});

$('textarea').css({
    'width':'100%',
    'margin-top':'10px'
});

$('.content').css({
    'width':'100%',
    'height':'100vh',
    'display':'flex',
    'flex-direction':'column'
});

$('.left-block').css({
    'width':'200px',
    'background-color':'lightblue'
});

$('.arrow').css({
    'cursor':'pointer'
});

$('.slider').css({
    'cursor':'ns-resize'
});

$('.top-block').css({
    'flex':'1',
    'background-color':'leghtgray',
    'min-height':'100px'
});
$('.bottom-block').css({
    'flex':'1',
    'background-color':'leghtgray',
    'min-height':'100px'
});


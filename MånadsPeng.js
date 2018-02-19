
var totKr;

var loadKr = localStorage.getItem('ml');

window.onload = function() {
  if (loadKr >= 0) {
    totKr = Number(loadKr);
  }
  
  else {
   totKr = 0;
  }
  document.getElementById('tot').innerHTML = totKr + ' ' + 'ml';
};



function tioKr() {
  totKr += 700;
  document.getElementById('tot').innerHTML = totKr + ' ' + 'ml';
  localStorage.setItem('ml', totKr);
}


function reset() {
  var conf = confirm('Vill du verkligen nollställa?');
  if (conf) {
    totKr = 0;
    document.getElementById('tot').innerHTML = totKr + ' ' + 'ml';
    localStorage.setItem('ml', totKr);
  }
}

function costum() {
  var costNum = document.getElementById('cost').value;
  totKr += Number(costNum);
  document.getElementById('tot').innerHTML = totKr + ' ' + 'ml';
    
  if (totKr < 0) {
    totKr = 0;
    document.getElementById('tot').innerHTML = totKr + ' ' + 'ml';
  }
  localStorage.setItem('ml', totKr);
}

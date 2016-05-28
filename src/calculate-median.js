function calculate_median(arr) {
  var l = getLength(arr);
  var x = getX(l);
  var x1 = getCeil(x);
  var d = getDecimal(x,x1);
  var p = getPosition(d,x1);
  var v = getValue(p,arr);
  return v;
}

function getLength(arr){
  var l = arr.length;
  return l;
}

function getX(l){
  var x = (l-1)/4.0;
  return x;
}

function getCeil(x){
  var x1 = Math.ceil(x1);
  return x1;
}

function getDecimal(x,x1){
  var d = x1 - x;
  return d;
}

function getPosition(d,x1){
  var p = [];
  if (d == 0.75 || d == 0.5){
    p.push(x1*2);
  }
  if (d == 0.25 || d == 0){
    p.push(x1*2)
    p.push((x1+1)*2); 
  }
  return p;
}

function getValue(p,arr){
  var v = 0;
  if(p.length == 1){
    v = arr[p[0]];
  }
  if(p.length == 2){
    v = (arr[p[0]] + arr[p[1]])/2;
  }
  return v;
}

module.exports = calculate_median;

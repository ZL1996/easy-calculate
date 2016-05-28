function calculate_median(arr) {
  var l = getLength(arr);
  var x = getX(l);
  var x1 = getCeil(x);
  var d = getDecimal(x,x1);
  var p = getPosition(d,x1);
  return getValue(p,arr);
}

function getLength(arr){
  return arr.length;
}

function getX(l){
  return (l-1)/4.0;
}

function getCeil(x){
  return Math.ceil(x);
}

function getDecimal(x,x1){
  return x1 - x;
}

function getPosition(d,x1){
  var p = [];
  if (d == 0.75 || d == 0.5){
    p[0]= x1*2;
  }
  if (d == 0.25 || d == 0){
    p[0] = x1*2;
    p[1] = (x1+1)*2; 
  }
  return p;
}

function getValue(p,arr){
  if(p.length == 1){
    return (arr[p[0]])-1;
  }
  if(p.length == 2){
    return ((arr[p[0]] + arr[p[1]])/2)-1;
  }
}

module.exports = calculate_median;

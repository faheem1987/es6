const pluck = function(array, property) {
   var paints = array.map((arr) => {
      return arr[property]; 
   });
   
   return paints;
}

const arr = [ {color: 'red' }, {color: 'blue'}, {color: 'green'} ];

pluck(arr, 'color');
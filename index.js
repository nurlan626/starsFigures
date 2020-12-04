
function square(n) {
     console.log('Square');
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(n));
}
    return n;
}
function emptySquare(n) {
    console.log('Empty Square');
    console.log('*'.repeat(n));
    for (let i = 1; i <= n; i++) {
        console.log('*'+ " ".repeat(n-2) + '*');
    }    
    a = console.log('*'.repeat(n));
    return n;
}
function triangle(n) {
    console.log('Triangle');
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}
function EmptyTriangle(n) {
    console.log('Empty Triangle');
    console.log('*');
    for (let i = 2; i <= n-1; i++) {
        console.log('*'+' '.repeat(i-2) + '*');
    }
    console.log('*'.repeat(n));
}
function sandClock(n) {  
    console.log('sandClock');
    for (var i = n; i >= 1; i--) { 
      var s = ""; 
      for (var j = 2 * n - 1; j >= 1; j--) {  
         (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";  
       } 
      console.log(s); 
     } 
     for (var i = 1; i <= n; i++) { 
        var s = ""; 
        for (var j = 1; j <= (2 * n - 1); j++) {  
           (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";  
         } 
        console.log(s); 
       } 
 } 
// function emptySandClock(n) {
//     console.log('Empty Sand Clock');
//     for (var i = 1; i <= n; i++) { 
//       var s = ""; 
//       for (var j = 1; j <= (2*n -1); j++) {  
//          (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";  
//        } 
//       console.log(s); 
//      } 
//  } 

let n = 5;
square(n);
emptySquare(n);
triangle(n);
EmptyTriangle(n);
sandClock(n);
emptySandClock(n);
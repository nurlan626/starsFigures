function square(n) {
    console.log('Square');
    for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(n));
    }
}
function emptySquare(n) {
    console.log('Empty Square');
    console.log('*'.repeat(n));
    for (let i = 1; i <= n-2; i++) {
        console.log('*'+ " ".repeat(n-2) + '*');
    }    
    console.log('*'.repeat(n));
}
function triangle(n) {
    console.log('Triangle');
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}
function emptyTriangle(n) {
    console.log('Empty Triangle');
    console.log('*');
    for (let i = 2; i <= n-1; i++) {
        console.log('*'+' '.repeat(i-2) + '*');
    }
    console.log('*'.repeat(n));
}
 function sandClock(n) {
     console.log('sand clock');
    for(let i = 0; i < n; i++){
        let stars = '*'.repeat(2*n - 2 * i);
        let space = ' '.repeat(i); 
        console.log(space + stars + space);
    }
    for(let i = 1; i <= n; i++){
        let space = ' '.repeat( n - i );
        let stars = '*'.repeat( i * 2)
        console.log(space + stars + space);
    }
}
function emptySandClock(n) {
    console.log('empty sand clock');
    console.log('*'.repeat(2*n));
   for(let i = 1; i < n - 1; i++){
       let stars = '*' +  ' '.repeat(2*n - 2*i-2) + '*';
       let space = ' '.repeat(i); 
       console.log(space + stars + space);
   }
   for(let i = 1; i < n; i++){
       let space = ' '.repeat( n - i );
       let stars = '*' + ' '.repeat( i * 2-2) +  '*';
       console.log(space + stars + space);
   }
   console.log('*'.repeat(2*n));
}
let n = 5;
square(n);
emptySquare(n);
triangle(n);
emptyTriangle(n);
sandClock(n);
emptySandClock(n);

let odd= [];
let even = [];
function UserID(numLoop){
   for (let i = 1; i <= numLoop; i++){
      if (i % 2 ===0){
   even.push(i);
      } else{
   odd.push(i)
      }
   }
   console.log("Total Number of Even UserID = " + even.length);
   console.log("Total Number of Odd UserID = "+ odd.length);
}

UserID(100)
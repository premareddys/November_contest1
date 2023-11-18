const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++){
    if(data[i].profession==="developer"){
      console.log(data[i])
    }
    
  }
}

// 2. Add Data
function addData() {
  let name=prompt("enter your name")
  let age=prompt("enter your age")
  let profession=prompt("enter your profession")
  let object = {name: name, age:age, profession:profession}
  data.push(object);
  console.log(object);
}

// 3. Remove Admins
function removeAdmin() {
  let Array = data.filter(obj=> obj.profession != 'admin');
  console.log(Array);
}


// 4. Concatenate Array
function concatenateArray() {
  const data1=[{name:"prema",age:22,profession:"developer"}];
  const newData= data.concat(data1);
  console.log(newData);
}

// 5. Average Age
function averageAge() {
  
      let sum=0;
      let length=data.length;
      for(let i=0;i<length;i++){
          sum=sum+data[i].age;
      }
      let average=sum/length;
      console.log(average);
      
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some(person => person.age > 25);
  console.log(above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessions = [...new Set(data.map(person => person.profession))];
  console.log("Unique professions:", uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  const sortedByAgeAscending = data.slice().sort((a, b) => a.age - b.age);
  console.log(sortedByAgeAscending);
}

// 9. Update Profession
function updateJohnsProfession() {
  data[0].profession="manager";
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let admin=0;
  let dev=0;
  for(let i=0;i<data.length;i++){
    if(data[i].profession==="admin"){
      admin++;
    }else if(data[i].profession === "developer"){
      dev++;
    }
  }
  console.log(`total admins are ${admin}`);
  console.log(`total developers are ${dev}`)
}
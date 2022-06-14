// const person = { name :"Jack Wiliam", age: 17, job: "facebooker", gfName: "Emma Watson", address: "Kochu Khet", phone:"01717112211", friends: ["Tom Hancks", "Tom Cruise"]  }
// const {job, salary} = person;
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName, phone,salary, job);
// console.log(gfName, phone,salary, job);

// const friends = ["Salman Khan", "Arman Khan", "Amir Khan", " Shahrukh Khan", "Imran Khan"];
// const [chotoFriend, boroFriend, ... restFriends] = friends;
// console.log( restFriends);
const complexObject = {
    name : "abc",
    info :{
        address: "Kola Bagan",
        leader: "Tiger Leader" 
    }
}

const {leader} = complexObject.info;
console.log(leader);
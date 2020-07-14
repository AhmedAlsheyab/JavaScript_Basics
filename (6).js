const Me = {
    Name: "Ahmed",
    Age: 14,
    Parents: ["Anees", "Khyryh"],
    Brothers: ["Laith", "Ghaith"],
    Sisters: ["Sewar", "Sara"],
    FavoriteColor: "black",
    PhoneNumber: "0780325519"
};
console.log(Me);

// Put this code in the console
typeof Me;
Me.Age
Me.Name
Me.Parents
Me.Brothers
Me.Sisters
Me.PhoneNumber
Me.FavoriteColor

function Person(name, lastName, age, country) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
}
const me = new Person("Ahmed", "Alsheyab", 14, "Jordan")

Person.prototype.eyecolor = "black"
console.log("My eyes color is " + me.eyecolor);
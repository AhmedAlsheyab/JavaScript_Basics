let FamilyMembers =  ["Annes", "Khyryh", "Sewar", "Sara", "Laith", "Ghaith", "Ahmed"];
console.log(FamilyMembers);
console.log(FamilyMembers[6]);
console.log(FamilyMembers.length);

FamilyMembers.push("Hussain");
console.log(FamilyMembers)
FamilyMembers.pop();
console.log(FamilyMembers)

const A = FamilyMembers.map(function(Member) {
    Member += " Alsheyab";
    return Member;
});
console.log(A);


const TheFirst = "Anees";
const TheSecond = "Khyryh";
const TheThird = "Sewar";
const TheFourth = "Sara";
const TheFifth = "Laith";
const TheSixth = "Ghaith";
const TheSeventh = "Ahmed"
const Family = [TheFirst, TheSecond, TheThird, TheFourth, TheFifth, TheSixth, TheSeventh];
Family.splice(2,2, "Hussain");
console.log(Family);


const Rainbow = ["Red","Orange","Purple","Yellow","Green"];
console.log(Rainbow);
Rainbow.splice(1,0,"Blue");
console.log(Rainbow);


const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Ahmed Alsheyab"];
console.log(team);
function HasEnoughPlayers(L) {
    if (L.length === 7)
        return "They have enough players";
    else if (L.length < 7)
        return "They have not enough players";
    else
        return "They have more players than allowed";
}
console.log(HasEnoughPlayers(team));


const TheFirst1 = "Anees";
const TheSecond2 = "Khyryh";
const TheThird3 = "Sewar";
const TheFourth4 = "Sara";
const TheFifth5 = "Laith";
const TheSixth6 = "Ghaith";
const TheSeventh7 = "Ahmed"
const Family1 = [TheFirst1, TheSecond2, TheThird3, TheFourth4, TheFifth5, TheSixth6, TheSeventh7];
const TheEighth8 = "Hussain";
Family1.push(TheEighth8)
console.log(Family1)


const Name = ["A","H","M","E","D"];
Name.shift()
console.log(Name);

Name.pop()
console.log(Name);

Name.reverse()
console.log(Name);

Name.sort()
console.log(Name);


// Put this code in the console
const Num = [300, 500, 700, 900, 1000, 600, 400, 100, 200, 800];
Num.filter((x) => x < 300);
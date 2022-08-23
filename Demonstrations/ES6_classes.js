class A {
  val = 1;
  getVal() {
    return this.val;
  }
}
//
class B extends A {
  val = 11;
  zal = 22;
  getZal() {
    return this.zal;
  }
}
//
class Person {
  //fields
  age = 120;
  //methods
  constructor(name) {
    this.name = name;
    this.title = 'student';
    if(name == 'ido') {
      this.title = 'teacher';
    }
    let day  = new Date().getDay();//local variable
    this.mood = day > 0 ? "working/learning" : "vacation!!";
  }
  //
  printDetails() { console.log(`${this.name},${this.title},${this.mood},${this}`)};
  //
  greet(){
    let word = 'hi , ';//local variable
    console.log(`${word} ${this.printDetails()}`);
  }
}
//
let p1 = new Person();
let p2 = new Person('matanel');
let p3 = new Person('ido');
p1.greet();
p2.printDetails();
p3.printDetails();
// console.log(a1.getVal());
// console.log(b1.getZal());

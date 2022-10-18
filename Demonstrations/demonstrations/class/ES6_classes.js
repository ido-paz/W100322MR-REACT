class A {
  val = 1;
  constructor(cal,tal){
    this.cal = cal;
    this.tal = tal;
  }
  getVal() {
    return this.val;
  }
}
//
class B extends A {
  val = 11;
  zal = 22;
  constructor(cc,tt){
    super(cc,tt);
  }
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
// let p1 = new Person();
// let p2 = new Person('matanel');
// let p3 = new Person('ido');
// p1.greet();
// p2.printDetails();
// p3.printDetails();
// let b1= new B()
// let b2= new B(33,44);
// console.log(b1);
// console.log(b2);
// console.log(a1.getVal());
// console.log(b1.getZal());

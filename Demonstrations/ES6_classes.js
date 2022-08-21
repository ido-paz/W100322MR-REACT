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
console.log(a1.getVal());
console.log(b1.getZal());

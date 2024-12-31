console.log("안녕하세요");

var a = 1;
let b = 2;
const c = 3;

a = 2;
b = 3;
// c = 4;

function add(a,b) {
    return a + b;
}

const add2 = (a,b) => a + b;

const add3 = add;

console.log( add2(1,3) );
console.log( add3(1,3) );

var 모듈 = {
    기능1 : function(a, b) {return a + b},
    기능2 : (a, b) => {return a + b},
    기능3 : (a, b) => a + b
}

console.log( 모듈.기능1(1,4) );
console.log( 모듈.기능2(1,4) );
console.log( 모듈.기능3(1,4) );

class 모듈2 {
    constructor() {}
    기능1(a, b) { 
        return a +b 
    };
    기능2(a, b) { 
        return a +b 
    };
    기능3(a, b) { 
        return a +b 
    };
}

const 객체 = new 모듈2();
console.log( 객체.기능1(1,4) );

a = 1;
b = "1";

if( a === b ) {
    console.log("참");
} else {
    console.log("거짓");
}

for(i=0; i< 5; i++) {
    console.log(i);
}

console.log(i);

// data => json

// {key:value}

const test = {
    a1: a,
    b1: 2,
    c1: "삼"
}

console.log( test.a );

var { b1:bb, c1 } = test;
console.log(bb, c1);

var test2 = test;
var test3 = {...test};

console.log(test, test2, test3);

test.e1 = false;
test2.b1 = 5;
test3.d1 = true;
var test4 = {...test, ...test2, ...test3}

console.log(test, test2, test3);
console.log(test4);

function fn_1() {
    console.log("출력해줄게!!");
}

function fn_2(f) {
    f();
}

fn_2(fn_1);

fn_2(function() {console.log("난 출력하는 걸~")});

fn_2(()=>console.log("점심 시간인걸?"));
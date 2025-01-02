// 모듈 사용하기
/***********************************************
 * 사용할 객체 : const model = {};
 ***********************************************/ 
const model = {};

/***********************************************
 * CommonJS : 사용법
 * 내보내기 : module.exports = model;
 * 가져오기 : const model = require("경로 + 파일");
 ***********************************************/ 
//const model = require("./data1.js");

/***********************************************
 * ES6 : 사용법
 * 내보내기 : export default model;
 * 가져오기 : import model from "경로 + 파일";
 ***********************************************/
//import model from "./data1.js"; 

// 데이터 확인
console.log(model);
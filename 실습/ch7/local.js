/*
function account(){
    var saveUser = '이은성';
    console.log('반갑습니다. ' + saveUser + '님');
}
account();
console.log('또 오셨네요. ' + saveUser + '님');
*/

function naver(){
    console.log('naver 함수 진입');
    var saveUser = '이귀엽';
    google();
    console.log('naver 함수 탈출');
}
function google(){
    console.log('google 함수 진입');
    var saveUser = '이예쁜';
    console.log('google 함수 탈출');
}
naver();
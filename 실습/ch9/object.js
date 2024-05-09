/*let dic = new Object();

dic.boy = "소년";
dic.girl = "소녀";
dic.friend = "친구";

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend); 


let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

dic.apple = '사과';
dic.ten = 10;
console.log(dic.apple);
console.log(dic.ten); 


let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

delete dic.girl;
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);



let dic = {
    present : "현재",
};

console.log(dic.present);
dic.present = "선물";
console.log(dic.present);



const dic = {
    present : "현재",
};

dic = {};
console.log(dic.present);
dic.present = "선물";
console.log(dic.present);



const unit = {
    attack : function(weapon) {
        return `${weapon}으로 공격한다.`;
    }
}

console.log(unit.attack("주먹"));
console.log(unit.attack("총"));



let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic['boy']);
console.log(dic['girl']);
console.log(dic['friend']);



const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("다이쓰! 무조건 천원, 상품입력?", function (obj){
    let basket = {
        [obj] : "1000원",
    }
    console.log(basket[obj]);
    
    rl.close();
}) 


let id = "jamsu";
let pw = "1111";

let user = {
    id : id, pw : pw,
}

console.log(user.id);
console.log(user.pw);*/



let user = {
    id : "jamsu",
    pw : "1111",
    name : "1ch",
    mobile : "010-4477-XXXX",
    country : "대한민국"
}

for(let info in user){
    console.log(`${info} : ${user[info]}`);
}
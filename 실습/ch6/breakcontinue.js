/* var value = 0;
while(true){
    if(value > 100){
        break;
    }
    console.log("value의 값 : " + value);
    value++;
}
console.log("value는 100보다 크다."); 


var value = 0;
while(value < 10){
    value++;
    if(value % 2 ==0){
        continue;
    }
    console.log("value의 값 : " + value); 
} 



var dan = 2;
while(dan < 10){
    var num = 1;
    while(num < 10){
        console.log(dan + "*" + num + "=" + dan*num);
        num++;
    }
    dan++;
} */


var dan = 2;
while (dan < 10){
    var num = 1;
    while(num < 10){
        if(dan == 6 && num == 1){
            break;
        }
        console.log(dan + "*" + num + "=" + dan*num);
        num++;
    }
    dan++;
}


function solution(answers) {
    let a = [1,2,3,4,5];
    let b = [2,1,2,3,2,4,2,5];
    let c = [3,3,1,1,2,2,4,4,5,5];
    let x=0;
    let y=0;
    let z=0;
    for(let num=0; num<answers.length; num++){
      if(a[num%5]==answers[num]){
        x +=1;
      }
      if(b[num%8]==answers[num]){
        y +=1;
      }
      if(c[num%10]==answers[num]){
        z +=1;
      }
    }
    let max = Math.max(x,y,z);
    let answer = [];
    if(x==max){answer.push(1);};
    if(y==max){answer.push(2);};
    if(z==max){answer.push(3);};
  
    return answer;
  }
//const answers = [];
const answers = [1,3,2,4,2];

function solution(answers) {
    var answer = [];
    var num1=[1,2,3,4,5];
    var num2=[2,1,2,3,2,4,2,5];
    var num3=[3,3,1,1,2,2,4,4,5,5];
    var count=[0,0,0];

    for(var i=0; i<answers.length; i++){
        if(num1[i%num1.length]===answers[i]){
            count[0]++;
        }
        if(num2[i%num2.length]===answers[i]){
            count[1]++;
        }
        if(num3[i%num3.length]===answers[i]){
            count[2]++;
        }
    }

    // Math.max(매개변수);는 매개변수들 중 제일 큰 숫자를 반환
    // Math.max(...배열이 담긴 변수);는 배열의 숫자들 중 가장 큰 숫자 반환.
    // var arr = [1, 2, 3];
    // var max = Math.max(...arr);

    var max = Math.max(...count);
    for(var i=0; i<count.length; i++){
        if(count[i] === max){
            answer.push(i+1);
        }        
    }
    return answer;
}

alert(solution(answers));
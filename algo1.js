
const size = 100000000;
const target = 789876;
const numbers = [...Array(size).keys()];

function algo1(){
    // Code
    findMid(numbers);
    // find the midde point
    // 1. check if mid is the target
    // if no continue
    // 2. if mid is less than target
    // if yes then new array is left side
    // if no then new array is right side
    // repeat back to 1
    function findMid(ary){
        if(Array.isArray(ary)){
            const midPoint = parseInt(ary.length/2);
            const midValue = ary[midPoint];
            console.log('midPoint',midPoint,'midValue',midValue, 'target', target)
            if(midValue == target){
                console.log("Found the the target", target);
            }
            else if(midValue>target){
                const newArray = ary.slice(0,midPoint);
                findMid(newArray);
            }
            else if(midValue<target){
                const newArray = ary.slice(midPoint,ary.length-1);
                findMid(newArray);
            }
        }
        else {
            console.log("Number is not an array", target);
        }
    }
}


function main(){
    console.log(new Date().toLocaleTimeString())
    algo1();
    console.log(new Date().toLocaleTimeString())
}

main();
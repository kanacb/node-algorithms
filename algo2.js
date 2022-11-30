

var randomArrayNumber = [45, 9, 0, 23, 65, 6, 13, 78, 91];

var randomArrayAlpha = ['a', 'k', 'f', 'm', 'w', 'g', 's', 'd', 'u'];


function algoSortNumber(){

    console.log(randomArrayNumber);

    randomArrayNumber = randomArrayNumber.sort((a,b) => b - a);

    console.log(randomArrayNumber);

}


function algoSortAlpha(){

    console.log(randomArrayAlpha);

    randomArrayAlpha = randomArrayAlpha.sort((a,b) => a.localeCompare(b));

    console.log(randomArrayAlpha);

}

// output of sort is array - same size
// output filter is array - same or smaller size
// output of map is array - same size
// output of reduce is number
// output of some is boolean

function algoFilterNumber(){

    console.log(randomArrayNumber);

    randomArrayNumber = randomArrayNumber.filter(i => i > 21);

    console.log(randomArrayNumber);

}


function algoMapNumber(){

    console.log(randomArrayNumber);

    randomArrayNumber = randomArrayNumber.map(transformer);

    function transformer(item) { return item * 5; }

    console.log(randomArrayNumber);

}


function algoReduceNumber(){

    console.log(randomArrayNumber);

    randomArrayNumber = randomArrayNumber.reduce(summations, 0);

    function summations(total, item) { 
        console.log(total, item)    
        return total + item; 
    }

    console.log(randomArrayNumber);

}

function algoSomeNumber(){

    console.log(randomArrayNumber);

    randomArrayNumber = randomArrayNumber.some(item => item == 45);

    console.log(randomArrayNumber);

}


function main(){

    // algoSortNumber();
    // algoSortAlpha();
    // algoFilterNumber();
    // algoMapNumber();
    // algoReduceNumber();
    algoSomeNumber();



}





main();
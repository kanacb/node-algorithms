
// 1 + 2 + 3 + 4 + ... + 99 + 100 = ?

// 0   + 1   + 2   + 3   ... + 47  + 48  + 49
//                                             + 50 
// 100 + 99  + 98  + 97  ... + 53  + 52  + 51
// =
// 100 + 100 + 100 + 100 ... + 100 + 100 + 100 

// 100 * 50 + 50 = 5050
// algorithm
// n = 100
// (n/2)*(n+1) => algorigthm
// n = 100
// (100/2)*(100+1) => 50*101= 5050


// n = 200
// (200/2)*(200+1) => 100*201 = 20100

function main(){

    const n = 200000000

    var start = new Date().getTime();
    var answer = gauss(n);
    var end = new Date().getTime();
    console.log('gauss',answer, end - start);


    start = new Date().getTime();
    answer = looper(n)
    end = new Date().getTime();
    console.log('looper', answer, end - start);

    function looper(n){
        var result = 0
        for(var i=0;i<=n;i++){
            result += i;
        }
        return result;
    }

    function gauss(n){
        return (n/2)*(n+1);
    }
}





main();
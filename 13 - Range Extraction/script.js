// Range Extraction

// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

const list = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];

function solution(list){
    const arrayOfAux = [];
    const aux = [];
    for (let i = 0; i < list.length; i++) {
       if (aux.length === 0 || list[i] === aux[aux.length - 1] + 1) aux.push(list[i]);
       else {
           arrayOfAux.push(aux.splice(0));
           aux.push(list[i]);
       }
       if (i === list.length - 1) arrayOfAux.push(aux.splice(0));
    }
    let output = '';
    let prefix = '';
    for (const aux of arrayOfAux) {
        output += prefix + aux[0].toString();
        if (aux.length > 1) {
            prefix = aux.length === 2 ? ',' : '-';       
            output += prefix + aux[aux.length - 1].toString();
        }
        prefix = ',';
    }
    return output;
}

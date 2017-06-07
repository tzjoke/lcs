// https://en.wikipedia.org/wiki/Longest_common_subsequence_problem

const lcs = (foo, bar) => {

    const generate2DArray = (x, y) => {
        let lenOfX = x.length, lenOfY = y.length
        let arr = []

        // init 2d-array arr
        for(let i=0; i<lenOfX; i++){
            arr[i] = []
            for(let j=0; j<lenOfY; j++){
                arr[i][j] = 0
            }
        }

        // rebuild arr with dynamic programming
        for(let i=1; i<lenOfX; i++){
            for(let j=1; j<lenOfY; j++){
                arr[i][j] =
                    x.charAt(i-1) === y.charAt(j-1)
                        ? (arr[i-1][j-1] + 1)
                        : Math.max(arr[i-1][j], arr[i][j-1])
            }
        }

        // the biggest number is the length of LCS
        return arr
    }

    // collect LCS with traceback approach
    const logLcs = (arr, x, y) => {
        let tempArr = []
        let i = x.length-1, j = y.length-1;

        while(i>=0 && j>=0){
            x.charAt(i) === y.charAt(j)
                ? (tempArr.push(x.charAt(i)) && i-- && j--)
                : (arr[i-1][j] > arr[i][j-1] ? i-- : j--)
        }

        return tempArr.reverse().join(',')
    }

    let arr = generate2DArray(foo, bar);
    return logLcs(arr, foo, bar);
}


console.log(lcs('12345', '1245'))
// 1,2,4,5



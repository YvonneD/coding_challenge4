const fs = require('fs');

//Part1
fs.readFile('./floor.txt', (err, data) => {
    console.time('part1');
    if (err)
        throw err;

    let up = (data.toString().match(/\(/g)).length;
    let down = (data.toString().match(/\)/g)).length;
    console.log(`santa will be at floor ${up - down}`);
    console.timeEnd('part1');
})

//Part2 way1
fs.readFile('./floor.txt', (err, data) => {
    console.time('part2');
    if (err)
        throw err;

    //     let pos = 0;
        //     for (let i = 0; i < data.toString().length; i++) {
        //         if (data.toString().charAt(i) === ')') {
        //             pos--
        //         } else {
        //             pos++
        //         }
        //         if (pos === -1) {
        //             console.log("Santa enters the basement at position:", i + 1);
        //             break;
        //         }
        //     }
        //     console.timeEnd('part2')
        // })

    //Part2 way2 more efficency --show all the positions
    let num = 0;
    const dataString = data.toString();
    const dataArray = dataString.split('');
    dataArray.map((x, position) => {
        if (x === ')') {
            num--
        } else {
            num++
        }
        if (num === -1) {
            console.log(position + 1);
        }
    })
    console.timeEnd('part2');
})
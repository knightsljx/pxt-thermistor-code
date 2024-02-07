//% color=#f44242 icon="\uf1b2" block="2D6"
namespace dices {
    //% blockId=dices_2d6 block="2D6"
    //% weight=100 blockGap=8
    export function roll2D6(): number {
        // generate two random numbers from 1 to 6
        let dice1 = Math.randomRange(1, 6);
        let dice2 = Math.randomRange(1, 6);
        // return the sum of the two dice
        return dice1 + dice2;
    }
}

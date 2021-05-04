// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right,
// }
// console.log(Direction.Up)
// console.log(Direction[0])
// //ts-node运行
const enum Direction{ //常量枚举
    Up = 'UP',
    Down ='DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
const value = 'UP'
if (value == Direction.Up){
    console.log('go up!')
}
// console.log(Direction.Up)
// console.log(Direction[0])
//ts-node运行
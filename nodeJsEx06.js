'use strict'

const test = new Set()  // set은 중복되지 않은 자료구조

test.add(1)
test.add(2)
test.add(1)
test.add(3)
test.add(2)

console.log(test)   // 결과 Set { 1, 2, 3 }

for(const item of test) {
    console.log(item)   // 1, 2, 3
}

const ret = test.has(3) // boolen타입으로 반환  has는 속해 있는지 없는지 찾는 것
const ret2 = test.has(0)

console.log(ret)    // true

console.log(ret2)   // false
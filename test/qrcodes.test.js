import qrcodes from '../src/qrcodes.js'

describe('test util functions', () => {
    test('test qrcodes', () => {
        let option = {
            nameList: ["A", "B", "C"],
            dataList: ["code=1576206365852a53be6e0f7da7e8c7d965f1b3ea831e2", "code=1576206365852a53be6e0f7da7e8c7d965f1b3ea831e2", "code=1576206365852a53be6e0f7da7e8c7d965f1b3ea831e2"]，
            timeOut: 1000
        }
        qrcodes(option)
    })
})
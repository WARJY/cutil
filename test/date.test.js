import date from '../src/date.js'

describe('test util functions', () => {
    test('test date', () => {
        console.log(date.now())
        console.log(date.now("YYYY-MM-DD"))
        console.log(date.format({
            value: new Date().getTime(),
            input: "timeStamp",
            output: "dateTime"
        }))
        console.log(date.format({
            value: "2019-08-04 23:15:25",
            input: "dateTime",
            output: "timeStamp"
        }))
    })
})

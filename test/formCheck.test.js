import formCheck from '../src/formCheck.js'

describe('test util functions', () => {
    test('test formCheck', () => {
        let target = {
            userName: "用户名",
            password: "123456",
            tel: 15320715871,
            email: "gcc705282892@hotmial.com"
        }
        expect(formCheck(target, {
            "用户名": "empty",
            "密码": "empty",
            "手机号码": ["empty", "phone"],
            "电子邮箱": ["empty", "email"]
        })).toBe(true)
    })
})

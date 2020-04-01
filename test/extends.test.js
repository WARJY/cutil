import extend from '../src/multiExtend.js'

describe('test util functions', () => {
    test('test multiExtend', () => {
        let Base1 = class {
            constructor(para) {
                console.log("Base1 construct")
            }
        }
        Base1.prototype.Base1 = "Base1"

        let Base2 = class {
            constructor(para) {
                console.log("Base2 construct")
            }
        }
        Base2.prototype.Base2 = "Base2"

        let Target = class extends extend([Base1, Base2]) {
            constructor(para) {
                super(para)
            }
        }

        let t = new Target()
        console.log(t.Base1)
        console.log(t.Base2)
        console.log(t instanceof Target)
        console.log(t instanceof Base1)
        console.log(t instanceof Base2)
    })
})

const rewire = require("rewire")
const index = rewire("./index")
const checksExistsUserAccount = index.__get__("checksExistsUserAccount")
// @ponicode
describe("checksExistsUserAccount", () => {
    test("0", () => {
        let callFunction = () => {
            checksExistsUserAccount({ user: { username: 123 }, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, "The line-by-line profiler can only be used in dev.", 196)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checksExistsUserAccount({ user: { username: "user name" }, headers: { Accept: "*/*", Accept-Encoding: "gzip, deflate", Host: "httpbin.org", User-Agent: "Chrome/83.0.4103.97 Safari/537.36", X-Amzn-Trace-Id: "Root=1-5ee7b614-d1d9a6e8106184eb3d66b108" } }, "Bad Authentication data", 254)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checksExistsUserAccount({ user: { username: "user123" }, headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, "Grader id does not match submission id that was passed in", 161)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            checksExistsUserAccount({ user: { username: "user123" }, headers: "DELETE" }, "Ran out of iterations", 202)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            checksExistsUserAccount({ user: { username: 123 }, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, "Error getting key from: %s", 250)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checksExistsUserAccount({}, "", Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

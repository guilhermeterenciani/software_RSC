//require('./../../../config');
//require('../../config')
const {verify, sign } = require('jsonwebtoken');

class TokenUtil{
    static genereteToken(user: any){
        return sign({ user }, "association-api", { expiresIn: "3h" });
    }
    static decodeToken(token: any){
        return verify(token, "association-api");
    }
}
module.exports = TokenUtil;
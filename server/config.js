class Config{
    static createConfig(){
        global.config = {
            jwt:{
                secret: "association-api",
                expiresIn: '3h'
            }
        }
    }
}

module.exports = Config.createConfig;
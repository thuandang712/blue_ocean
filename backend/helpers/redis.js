const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
    console.error(error);
});


const setJWT = (key, value) => {
    try {
        client.set(key, value);
    } catch (error) {
        console.log(error)
    }

}

const getJWT = key => {
    try {
        client.get(key);
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    setJWT,
    getJWT
}
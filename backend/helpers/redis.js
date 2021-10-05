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

const getJWT = async key => {
    try {
        await client.get(key, (err, value) => {
            if (err) {
                return err
            }
            console.log(value)
        });
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    setJWT,
    getJWT
}
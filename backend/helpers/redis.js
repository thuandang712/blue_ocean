const redis = require("redis");
const client = redis.createClient(process.env.REDIS_URL);

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
    return new Promise((resolve, reject) => {
        try {
            client.get(key, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteJWT = key => {
    try {
        client.del(key)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    setJWT,
    getJWT,
    deleteJWT
}
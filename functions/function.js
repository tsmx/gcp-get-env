module.exports.getEnv = (req, res) => {
    let result = process.env;
    if (result.S2A_ACCESS_TOKEN) {
        result.S2A_ACCESS_TOKEN = 'xxxx';
    }
    res.json(result);
};
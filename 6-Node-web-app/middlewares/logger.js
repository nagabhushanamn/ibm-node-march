


function logger() {
    return function (req, resp, next) {
        let start = +new Date();
        let url = req.url;
        let method = req.method;
        let stream = process.stdout;
        resp.on('finish', function () {
            let duration = +new Date() - start;
            let message = `${method}  ${url} - took ${duration} \n`;
            stream.write(message)
        });
        next();
    }
}

module.exports = logger;
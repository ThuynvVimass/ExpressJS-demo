const newRouter = require('./news');
const chiNhanhRouter = require('./chiNhanh');
const siteRouter = require('./site');

function route (app){

    app.use('/news', newRouter);

    app.use('/chi-nhanh', chiNhanhRouter);

    app.use('/', siteRouter);

}

module.exports = route;

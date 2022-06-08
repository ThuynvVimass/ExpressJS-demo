class ChiNhanhController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }
}

module.exports = new ChiNhanhController;
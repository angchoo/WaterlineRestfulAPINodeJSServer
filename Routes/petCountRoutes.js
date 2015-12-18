/**
 * Created by jfangchoo on 01/07/2015.
 */
var express=require('express');

var routes=function(app) {
    var countPetRouter = express.Router(app);
    countPetRouter.route('/countpet')

        .get(function (req, res) {
            var query = req.query;

            app.models.vwcountpet.find(query).exec(function (err, models) {
                if (err) return res.json({err: err}, 500);
                res.json(models);
            });
        });
    return countPetRouter;
};

module.exports=routes;

/**
 * Created by jfangchoo on 19/06/2015.
 */
var express=require('express');

var routes=function(app){
    var  petRouter=express.Router(app);
    petRouter.route('/pet')

        .post(function(req,res){

            var record=req.body;

            if(record.id===0){
                console.log(record.name.toString());
                app.models.pet.create(record).exec(function(err,created){
                    if (err) return res.status(500).json({ err: err });
                    res.json( created );
                });
            }else {
                app.models.pet.findOneById(record.id).exec(function(err,row){
                    if(err) return res.status(500).json({ err: err });
                    app.models.pet.update({id:record.id},record).exec(function(err,updated){
                        if(err) return res.status(500).json({ err: err });
                        res.json(updated);
                    });
                });

            }
        })
        .put(function(req,res){
            var record=req.body;
            app.models.pet.update({id:record.id},record).exec(function(err,updated){
                if(err) return res.status(500).json({ err: err });
                res.json(updated);
            });
        })
        .patch(function(req,res){
            var record=req.body;
            app.models.pet.update({id:record.id},record).exec(function(err,updated){
                if(err) return res.status(500).json({ err: err });
                res.json(updated);
            });
        })
        .delete(function(req,res){
            var record=req.body;
            app.models.pet.findOneById(record.id).exec(function(err,row){
                if(err) return res.status(500).json({ err: err });
                app.models.pet.destroy({id:record.id}).exec(function(err){
                    if(err) return res.status(500).send({ err: err});
                    res.send('Row:' + record.id + ' has been deleted');
                });
            });
        })
        .get(function(req, res) {
            var query=req.query;

            app.models.pet.find(query).exec(function(err, models) {
                if(err) return res.json({ err: err }, 500);
                res.json(models);
            });
        });

    petRouter.route('/pet/:id')
        .get(function(req, res) {
            var query=req.query;

            app.models.pet.findById(req.params.id).exec(function(err, models) {
                if(err) return res.json({ err: err }, 500);
                res.json(models);
            });
        });

return petRouter;
};

module.exports=routes;
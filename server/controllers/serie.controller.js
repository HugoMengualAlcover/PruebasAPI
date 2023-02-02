const Serie = require("../models/serie.model");

const serieCtrl = {};

serieCtrl.addSerie = async(req, res) => {
    const mySerie = new Serie(req.body);
    await mySerie.save()
        .then(() => {
            res.json({message: 'Serie Succesfully Inserted'})
        })
        .catch(err => res.send(err.message));
}


serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
}

serieCtrl.updateSerie = () => {};
serieCtrl.addSerie();
serieCtrl.getSeries()
serieCtrl.getSerie = () => {};
serieCtrl.getGenres = () =>{};
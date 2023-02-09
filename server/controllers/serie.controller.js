const Serie = require('../models/serie.model');

const serieCtrl = {};

serieCtrl.addSerie = async(req, res) => {
    const mySerie = new Serie(req.body);
    await mySerie.save()
        .then(() => {
            res.json({message:'Interfaces Succesfully Inserted'});
        })
        .catch(err => res.send(err.message));
};

serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
};

serieCtrl.getSerie = async (req, res) => {
    const  serie = await Serie.findById(req.params.id)
        .then((data) => {
            if(data!=null) res.json(data)
            else res.json({message: 'Interfaces doesnt exist'})
        })
        .catch(err => console.log(err))
};

serieCtrl.deleteSerie = async (req, res) =>{
    await Serie.findByIdAndDelete(req.params.id)
        .then((data) =>{
            if (data!=null){
                res.json(
                    {message: 'La Interfaces ha sido eliminada'}
                )
            }else {
                res.json({message: "La Interfaces no existe"})
            }
        })
        .catch(err => res.send(err.message));
}

serieCtrl.updateSerie = async (req,res) => {
    const serie = req.body;
    await Serie.findByIdAndUpdate(
        req.params.id,
        {$set: serie},
        {new:true}
    )
        .then((data) => {
                if (data != null) res.json({message: "Interfaces Succesfully Updated", data})
                else res.json({message: "Series doesn't exist"})
            })
        .catch(err => res.send(err.message));
}

serieCtrl.getSerieCategoria = async (req, res) => {
    const serie = await Serie.find({categorias: req.params.id})
        .then ((data)=> {
            if (data != null) res.json(data)
            else res.json({message: "Interfaces doesn't exist"})
        })
        .catch(err => console.log(err))

}

module.exports = serieCtrl;



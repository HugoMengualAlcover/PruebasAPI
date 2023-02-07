const Categoria = require("../models/categoria.model");

const categoriaCtrl = {};

categoriaCtrl.addCategoria = async(req, res) => {
    const myCategoria = new Categoria(req.body);
    await myCategoria.save()
        .then(() => {
            res.json({message: 'Categoria Succesfully Inserted'})
        })
        .catch(err => res.send(err.message));
}


categoriaCtrl.getCategorias = async (req, res) => {
    const categoria = await Categoria.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
}

categoriaCtrl.getCategoria = async (req, res) => {
    const categoria = await Categoria.findById(req.params.id)
.then((data) => {
        if(data!=null) res.json(data)
        else res.json({message: 'Categoria doesnt exist'})
    })
        .catch(err => console.log(err))
}

module.exports = categoriaCtrl;
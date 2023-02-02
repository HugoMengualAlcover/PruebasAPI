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
    const series = await Serie.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
}
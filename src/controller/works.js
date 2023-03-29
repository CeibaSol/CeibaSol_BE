const works = require("../models/works");

const crearTrabajo = async (req, res) => {
    const { nameWork, description, linkImg } = req.body;

    try {
        let newWork = await works.findOne({ nameWork });

        if (newWork) {
            return res.status(400).json({
                succes: false,
                error: "Ese trabajo ya existe",
            });
        }

        newWork = new works(req.body);
        await newWork.save();

        return res.status(200).json({
            succes: true,
            newWork,
            message: "Trabajo creado",
        });
    } catch (error) {
        return res.status(500).json({
            succes: false,
            error: error.message,
        });
    }
};

const listarTrabajo = async (req, res) => { }

const eliminarTrabajo = async (req, res) => { }

const actualizarTrabajo = async (req, res) => { }


module.exports = {
    crearTrabajo,
    listarTrabajo,
    eliminarTrabajo,
    actualizarTrabajo

}
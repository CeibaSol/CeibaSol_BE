const service = require("../models/service");

const crearServicio = async (req, res) => {
  const { nameService, subService, linkImg } = req.body;

  try {
    let newService = await service.findOne({ nameService });

    if (newService) {
      return res.status(400).json({
        succes: false,
        error: "Ese servicio ya existe",
      });
    }

    newService = new service(req.body);
    await newService.save();

    return res.status(200).json({
      succes: true,
      newService,
      message: "Servicio creado",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const listarServicios = async (req, res) => {};

const eliminarServicio = async (req, res) => {};

const actualizarServicio = async (req, res) => {};

module.exports = {
  crearServicio,
  listarServicios,
  eliminarServicio,
  actualizarServicio,
};

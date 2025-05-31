const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const City = await cityService.createCity(req.body);
        return res.status(201).json({
            data: City,
            success: true,
            err: {},
            message: "City created successfully"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to create City"
        });
    }
}
// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: "City deleted successfully"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to delete the City"
        });
    }
}
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: "City updated successfully"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to update the City"
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: "City fetched successfully"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to get the City"
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
} 
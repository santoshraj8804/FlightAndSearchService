const {FlightService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: "Flight created successfully"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to create Flight"
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Flights fetched successfully"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to fetch the Flights"
        });
    }
}
const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched the Flight"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to fetch the Flight"
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully updated the Flight"
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Not able to update the Flight"
        });
    }
}





module.exports = {
    create,
    getAll,
    get,
    update
};
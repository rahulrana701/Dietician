const Cals = require('../models/Cals');

function CalculateCalories(weight, height, age, gender, activityLevel) {
    let bmr = 0;
    let activityMultiplier = 1;

    if (gender === 'male') {
        bmr = Math.floor(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age);
    } else if (gender === 'female') {
        bmr = Math.floor(447.593 + 9.247 * weight + 3.098 * height - 4.330 * age);
    } else {
        return null;
    }

    switch (activityLevel) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'lightly-active':
            activityMultiplier = 1.375;
            break;
        case 'moderately-active':
            activityMultiplier = 1.55;
            break;
        case 'very-active':
            activityMultiplier = 1.725;
            break;
        case 'extra-active':
            activityMultiplier = 1.9;
            break;
        default:
            break;
    }

    return Math.floor(bmr * activityMultiplier);
}

const getallcal = async (req, res) => {
    const cal = await Cals.find({ createdby: req.user.userId }).sort('createdAt');
    const calsWithActualCalories = cal.map((cals) => {
        const { height, weight, age, gender, activityLevel } = cals;
        const actualcal = CalculateCalories(weight, height, age, gender, activityLevel);
        return { cals, actualcal };
    });
    res.status(200).json({ calsWithActualCalories });
}
const createcal = async (req, res) => {
    req.body.createdby = req.user.userId;
    const { height, weight, age, gender, activityLevel } = req.body;
    const cal = await Cals.create(req.body);
    const actualcal = CalculateCalories(weight, height, age, gender, activityLevel);
    res.status(200).json({ cal, actualcal });

}
const getcurrentcal = async (req, res) => {
    const { user: { userId }, params: { id: calId } } = req;

    const cal = await Cals.find({
        _id: calId,
        createdby: userId,
    })
    if (!cal) {
        res.status(409).json('no calories recorded')
    }
    const { height, weight, age, gender, activityLevel } = cal[0];
    const actualcal = CalculateCalories(weight, height, age, gender, activityLevel);
    res.status(200).json({ cal: cal[0], actualcal });
}
const updatecurrentcal = async (req, res) => {
    const { body: { height, weight, gender, age, activityLevel }, user: { userId }, params: { id: calId } } = req;
    if (height === ' ' || weight === ' ' || gender === ' ' || age === ' ' || activityLevel === ' ') {
        res.json('no calorie recorded')
    }
    const cal = await Cals.findByIdAndUpdate({ _id: calId, createdby: userId }, req.body, { new: true })
    if (!cal) {
        res.status(409).json('no calorie recorded')
    }
    const actualcal = CalculateCalories(cal.weight, cal.height, cal.age, cal.gender, cal.activityLevel);
    res.status(200).json({ cal, actualcal });
}
const deletecurrentcal = async (req, res) => {
    const { user: { userId }, params: { id: calId } } = req;
    const cal = await Cals.findByIdAndRemove({ _id: calId, createdby: userId })
    if (!cal) {
        res.status(409).json('no calorie recorded')
    }
    res.status(200).json("the note has finally been deleted");
}



module.exports = {
    getallcal,
    createcal,
    getcurrentcal,
    updatecurrentcal,
    deletecurrentcal,
}
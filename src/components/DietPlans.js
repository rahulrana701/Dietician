import React, { useState, useEffect } from "react";
import "../styles/dietplan.css";
import dietarray from "./array";
import ScrollReveal from 'scrollreveal';




export default function DietPlans() {
    const [gender, setgender] = useState("");
    const [goaltype, setgoaltype] = useState("");
    const [diettype, setdiettype] = useState("");
    const [showData, setshowData] = useState(false);

    const healtharray = dietarray;

    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.diet h1', { delay: 300, origin: 'top' });
        sr.reveal('.diet h3', { delay: 300, origin: 'top' });
        sr.reveal('.diet form', { delay: 300, origin: 'top' });


        return () => {
            sr.destroy();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setshowData(true);
    };
    useEffect(() => {
        setshowData(false)
    }, [gender, diettype, goaltype])

    return (
        <>
            <div className="diet">
                <h1>GET YOUR PERSONALISED <span> DIET PLANS</span></h1>
                <h3>
                    Here you can get diet plans according to your goals <br /> of whether you
                    want to gain or lose weight, and you can track your <br /> calories according
                    to the diet plans by seeing the macros of the <br /> food items present in
                    the diet plan and adjust them as per your needs.
                </h3>
                <form onSubmit={handleSubmit}>
                    <select name="gender" id="gender-input" value={gender} onChange={(e) => { setgender(e.target.value) }}>
                        <option value="">ENTER YOUR GENDER</option>
                        <option value="male">MALE</option>
                        <option value="female">FEMALE</option>
                    </select>
                    <select
                        name="goaltype"
                        id="goaltype-input"
                        value={goaltype}
                        onChange={(e) => {
                            setgoaltype(e.target.value);
                        }}
                    >
                        <option value="">ENTER YOUR GOAL TYPE</option>
                        <option value="weightloss">Lose weight</option>
                        <option value="weightgain">Gain Weight</option>
                        <option value="musclegain">Gain Muscle</option>
                    </select>
                    <select
                        name="diettype"
                        id="diettype-input"
                        value={diettype}
                        onChange={(e) => {
                            setdiettype(e.target.value);
                        }}
                    >
                        <option value="">ENTER YOUR DIET TYPE</option>
                        <option value="vegetarian">VEGETARIAN</option>
                        <option value="non-vegetarian">NON VEGETARIAN</option>
                    </select>
                    <input type="submit" value="GET DIET PLAN" />
                </form>
            </div>
            {showData && (
                <div className="dietdiet2">
                    <div className="diet2">
                        {gender === "male" &&
                            goaltype === "weightgain" &&
                            diettype === "vegetarian" && (
                                <>
                                    <h2>Breakfast: <span> {healtharray[2].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks: <span>{healtharray[2].meal_plan.midmorningsnack}</span> </h2>
                                    <h2>Lunch: <span> {healtharray[2].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[2].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner: <span>{healtharray[2].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack:  <span> {healtharray[2].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack: <span> {healtharray[2].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "male" &&
                            goaltype === "weightgain" &&
                            diettype === "non-vegetarian" && (
                                <>
                                    <h2>Breakfast:  <span>{healtharray[8].meal_plan.breakfast}</span> </h2>
                                    <h2>Mid-Morning-Snacks:  <span> {healtharray[8].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch:  <span> {healtharray[8].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[8].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner:  <span> {healtharray[8].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack:  <span> {healtharray[8].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[8].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "female" &&
                            goaltype === "weightgain" &&
                            diettype === "vegetarian" && (
                                <>
                                    <h2>Breakfast:  <span> {healtharray[9].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks: <span>{healtharray[9].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span>{healtharray[9].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack: <span>{healtharray[9].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner:  <span> {healtharray[9].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack: <span>{healtharray[9].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[9].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "female" &&
                            goaltype === "weightgain" &&
                            diettype === "non-vegetarian" && (
                                <>
                                    <h2>Breakfast:   <span> {healtharray[3].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks:  <span> {healtharray[3].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span>{healtharray[3].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[3].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner: <span>{healtharray[3].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack: <span>{healtharray[3].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[3].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "male" &&
                            goaltype === "weightloss" &&
                            diettype === "vegetarian" && (
                                <>
                                    <h2>Breakfast:  <span> {healtharray[0].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks:  <span> {healtharray[0].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span>{healtharray[0].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[0].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner: <span>{healtharray[0].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack: <span>{healtharray[0].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack: <span>{healtharray[0].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "male" &&
                            goaltype === "weightloss" &&
                            diettype === "non-vegetarian" && (
                                <>
                                    <h2>Breakfast:  <span> {healtharray[6].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks: <span>{healtharray[6].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span>{healtharray[6].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[6].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner: <span>{healtharray[6].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack:  <span> {healtharray[6].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[6].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "female" &&
                            goaltype === "weightloss" &&
                            diettype === "vegetarian" && (
                                <>
                                    <h2>Breakfast:  <span>{healtharray[7].meal_plan.breakfast}</span> </h2>
                                    <h2>Mid-Morning-Snacks:  <span> {healtharray[7].meal_plan.midmorningsnack}</span> </h2>
                                    <h2>Lunch:  <span> {healtharray[7].meal_plan.lunch}</span> </h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[7].meal_plan.afternoonsnack}</span> </h2>
                                    <h2>Dinner:  <span> {healtharray[7].meal_plan.dinner}</span> </h2>
                                    <h2>Evening-Snack: <span>{healtharray[7].meal_plan.eveningsnack}</span> </h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[7].meal_plan.prebedtimesnack}</span> </h2>
                                </>
                            )}
                        {gender === "female" &&
                            goaltype === "weightloss" &&
                            diettype === "non-vegetarian" && (
                                <>
                                    <h2>Breakfast: <span> {healtharray[1].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks:  <span>  {healtharray[1].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span> {healtharray[1].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span>  {healtharray[1].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner: <span> {healtharray[1].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack:  <span>  {healtharray[1].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span>  {healtharray[1].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "male" &&
                            goaltype === "musclegain" &&
                            diettype === "vegetarian" && (
                                <>
                                    <h2>Breakfast: <span> {healtharray[4].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks: <span>{healtharray[4].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch:  <span> {healtharray[4].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span> {healtharray[4].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner:  <span> {healtharray[4].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack:  <span> {healtharray[4].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[4].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "male" &&
                            goaltype === "musclegain" &&
                            diettype === "non-vegetarian" && (
                                <>
                                    <h2>Breakfast:  <span> {healtharray[10].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks:  <span>  {healtharray[10].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span> {healtharray[10].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack: <span> {healtharray[10].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner:  <span>  {healtharray[10].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack:  <span>  {healtharray[10].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span>  {healtharray[10].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "female" &&
                            goaltype === "musclegain" &&
                            diettype === "vegetarian" && (
                                <>
                                    <h2>Breakfast: <span> {healtharray[5].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks: <span>{healtharray[5].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch: <span> {healtharray[5].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack: <span> {healtharray[5].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner:  <span> {healtharray[5].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack: <span>{healtharray[5].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack:  <span> {healtharray[5].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                        {gender === "female" &&
                            goaltype === "musclegain" &&
                            diettype === "non-vegetarian" && (
                                <>
                                    <h2>Breakfast: <span> {healtharray[11].meal_plan.breakfast}</span></h2>
                                    <h2>Mid-Morning-Snacks:  <span>  {healtharray[11].meal_plan.midmorningsnack}</span></h2>
                                    <h2>Lunch:  <span>  {healtharray[11].meal_plan.lunch}</span></h2>
                                    <h2>Afternoon-Snack:  <span>  {healtharray[11].meal_plan.afternoonsnack}</span></h2>
                                    <h2>Dinner: <span>  {healtharray[11].meal_plan.dinner}</span></h2>
                                    <h2>Evening-Snack: <span> {healtharray[11].meal_plan.eveningsnack}</span></h2>
                                    <h2>Pre-Bedtime-Snack: <span>  {healtharray[11].meal_plan.prebedtimesnack}</span></h2>
                                </>
                            )}
                    </div>
                    <p>
                        NOTE THAT IF YOU WANT TO
                        LOOSE WEIGHT YOU NEED TO BE IN CALORIE <br /> DEFECIET AND IF YOU WANT TO GAIN WEIGHT YOU NEED TO
                        BE <br /> IN CALORIE SURPLUS MEANS YOU HAVE TO DECREASE AND INCREASE YOUR <br /> MAINTAINANCE CALORIES
                        RESPECTIVELY. YOU CAN ADJUST THE MEALS <br /> AND IT'S QUANTITY ACCORDING TO YOUR CALORIES INTAKE
                        IF <br /> YOU DON'T DON'T KNOW ABOUT ANY MEAL OR LIKE DON'T KNOW HOW TO COOK <br /> IT AND WHAT INGREDIENTS
                        WOULD BE REQUIRED YOU CAN ALWAYS <br /> CHECK OUR RECIPES SECTION , THERE YOU CAN <br /> FIND ANY MEAL RECIPE
                        WITH IT'S MACROS...
                    </p>
                </div>
            )}

        </>
    );
}
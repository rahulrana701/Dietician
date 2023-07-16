import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import "../styles/calorie.css";

const api_nk = process.env.REACT_APP_API_KEY_NA;
const api_ni = process.env.REACT_APP_API_ID_NA;

export default function Calorie() {
  const navigate = useNavigate();

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [caldata, setCaldata] = useState({});
  const [caldata2, setCaldata2] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [macros, setMacros] = useState({});
  const [searchmacros, setSearchmacros] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in or sign up before calculating your calories');
      navigate('/login');
    } else {
      setIsLoggedIn(true);
      const handleSubmit2 = async () => {
        const response = await fetch(`https://dietician-pi8g.onrender.com/api/v1/calorie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        data.calsWithActualCalories.forEach((item) => {
          if (item.cals && item.cals.date) {
            const formattedDate = format(new Date(item.cals.date), 'dd-MM-yy');
            item.cals.date = formattedDate;
          }
        });
        setCaldata2(data.calsWithActualCalories);
      };
      handleSubmit2();
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!height || !weight || !age || !gender || !activityLevel) {
      setErrorMessage('Please fill in all the details');
      return;
    }
    setErrorMessage('');
    const token = localStorage.getItem('token');

    const response = await fetch(`https://dietician-pi8g.onrender.com/api/v1/calorie`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ height, weight, age, gender, activityLevel }),
    });

    const data = await response.json();
    if (data.cal && data.cal.date) {
      const formattedDate = format(new Date(data.cal.date), 'dd-MM-yy');
      data.cal.date = formattedDate;
    }
    setCaldata(data);
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    let url = `https://api.edamam.com/api/nutrition-data?app_id=${api_ni}&app_key=${api_nk}&nutrition-type=logging&ingr=${encodeURIComponent(
      searchmacros
    )}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setMacros(parsedData);
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <div className="whycalories">
            <div className="whycaloriebox">
              <h1>CALORIE CALCULATION IS IMPORTANT TO REACH YOUR GOAL PHYSIQUE</h1>
              <h3>
                Knowing the number of calories you consume and burn can help you manage your weight effectively. By
                tracking your calorie intake and expenditure, you can create a calorie deficit or surplus to reach your
                weight goals.
              </h3>
              <h3>
                Calorie calculation allows you to assess the balance of macronutrients (carbohydrates, proteins, and
                fats) in your diet. It helps you ensure that you are getting an appropriate distribution of nutrients for
                optimal health and performance.
              </h3>
            </div>
          </div>

          <div className="calorie" onSubmit={handleSubmit}>
            <h1>CALCULATE YOUR CALORIES</h1>
            <form action="">
              <input
                type="text"
                name="height"
                id="height-input"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                placeholder="ENTER YOUR HEIGHT IN CM"
              />
              <input
                type="text"
                name="weight"
                id="weight-input"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                placeholder="ENTER YOUR WEIGHT IN KG"
              />
              <input
                type="text"
                name="age"
                id="age-input"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="ENTER YOUR AGE"
              />
              <select
                name="gender"
                id="gender-input"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="">ENTER YOUR GENDER</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <select
                name="activityLevel"
                id="activity-input"
                value={activityLevel}
                onChange={(e) => {
                  setActivityLevel(e.target.value);
                }}
              >
                <option value="">ENTER YOUR DAILY ACTIVITY LEVEL</option>
                <option value="sedentary">sedentary</option>
                <option value="lightly-active">lightly-active</option>
                <option value="moderately-active">moderately-active</option>
                <option value="very-active">very-active</option>
                <option value="extra-actived">extra-active</option>
              </select>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <input type="submit" value="CHECK YOUR CALORIES" />
            </form>
            <div className="checkcalories">
              <div className="displaycalories">
                <h2>YOUR MAINTENANCE CALORIES:</h2>
                <h2>{caldata.actualcal}</h2>
                <h4>DATE: {caldata.cal && caldata.cal.date}</h4>
              </div>
            </div>
          </div>

          <div className="calorieresult">
            <h1>IMPORTANT !!!</h1>
            <h3>
              IF YOU WANT TO GAIN WEIGHT you need <span> 5-10% increase in calories above maintenance</span>.
            </h3>
            <h3>
              IF YOU WANT TO LOSE WEIGHT you need <span> 10-5% decrease in calories below maintenance</span>.
            </h3>
          </div>

          <div className="getallinput">
            <h1>YOUR PREVIOUS CALORIES YOU CALCULATED</h1>
            <p>
              By keeping a record of previous calories, you can identify triggers or behaviors that influence your eating
              habits. For example, you might notice that you tend to eat more when you're stressed or bored. This
              awareness can help you develop strategies to manage or avoid these triggers and make healthier choices.
            </p>
          </div>

          <div className="getall">
            {caldata2.length > 0 &&
              caldata2.map((item, index) => (
                <div className="getallcal" key={index}>
                  <h4>YOUR HEIGHT: {item.cals && item.cals.height} CM</h4>
                  <h4>YOUR WEIGHT: {item.cals && item.cals.weight} KG</h4>
                  <h4>YOUR AGE: {item.cals && item.cals.age}</h4>
                  <h4>YOUR GENDER: {item.cals && item.cals.gender}</h4>
                  <h2>YOUR MAINTENANCE CALORIES</h2>
                  <h2>{item.actualcal}</h2>
                  <h4>DATE: {item.cals && item.cals.date}</h4>
                </div>
              ))}
          </div>

          <div className="mastcalorie">
            <h1>CHECK THE CALORIES AND MACROS OF ANY FOOD ITEM</h1>
            <p>
              CHECKING MACROS AND CALORIES OF FOOD ITEMS IS IMPORTANT AS IT HELPS YOU TO MAKE YOUR DIET PLAN ACCORDING TO
              YOUR GOAL AND YOUR CALORIES INTAKE. THIS WILL ALSO HELP YOU TO TRACK YOUR CALORIES.
            </p>
            <div className="mastcalorieform">
              <input
                type="text"
                value={searchmacros}
                onChange={(e) => {
                  setSearchmacros(e.target.value);
                }}
                placeholder="ENTER THE FOOD ITEM WITH ITS QUANTITY"
              />
              <input type="submit" value="CHECK THE MACROS" onClick={handleSubmit3} />
            </div>
            <div className="mastcaloriecheck">
              <h1>NUTRITIONAL FACTS</h1>
              <hr />
              <h2>
                CALORIES:&nbsp;&nbsp;&nbsp;&nbsp; <span> {macros.calories}</span>
              </h2>
              <h3>{macros.healthLabels && macros.healthLabels.slice(0, 2)}</h3>
              <h4>
                FAT:&nbsp;&nbsp;&nbsp;&nbsp; <span> {macros.totalNutrients && macros.totalNutrients.FAT && `${String(macros.totalNutrients.FAT.quantity).slice(0, 4)} ${macros.totalNutrients.FAT.unit}`}</span>
              </h4>
              <h4>
                PROTEIN:&nbsp;&nbsp;&nbsp;&nbsp; <span> {macros.totalNutrients && macros.totalNutrients.PROCNT && `${String(macros.totalNutrients.PROCNT.quantity).slice(0, 4)} ${macros.totalNutrients.PROCNT.unit}`}</span>
              </h4>
              <h4>
                CARBS:&nbsp;&nbsp;&nbsp;&nbsp; <span> {macros.totalNutrients && macros.totalNutrients.CHOCDF && `${String(macros.totalNutrients.CHOCDF.quantity).slice(0, 4)} ${macros.totalNutrients.CHOCDF.unit}`}</span>
              </h4>
              <h4>
                CHOLESTEROL:&nbsp;&nbsp;&nbsp;&nbsp; <span> {macros.totalNutrients && macros.totalNutrients.CHOLE && `${String(macros.totalNutrients.CHOLE.quantity).slice(0, 4)} ${macros.totalNutrients.CHOLE.unit}`}</span>
              </h4>
              <h4>
                SODIUM:&nbsp;&nbsp;&nbsp;&nbsp; <span> {macros.totalNutrients && macros.totalNutrients.NA && `${String(macros.totalNutrients.NA.quantity).slice(0, 4)} ${macros.totalNutrients.NA.unit}`}</span>
              </h4>
            </div>
          </div>
        </>
      )}
    </>
  );
}


// The encodeURIComponent() function is a built-in JavaScript function that is used to encode special
// characters in a URI (Uniform Resource Identifier) component.

// In the provided code, encodeURIComponent(searchmacros) is used to encode the value of the searchmacros
// state variable before including it in the API URL. This is necessary to ensure that any special characters
//  or reserved characters in the searchmacros value are properly encoded and do not interfere with the
//  structure of the URL.

// For example, if the searchmacros value is "One Banana", the encodeURIComponent() function will convert
// it to "One%20Banana". The space character is encoded as "%20" because spaces are not allowed in URLs.

// By encoding the URI component, you can safely include it in the API URL without causing any issues
// related to special characters.

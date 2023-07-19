
<img width="1007" alt="Screenshot 2023-07-16 190834" src="https://github.com/rahulrana701/Dietician/assets/123585591/7c031fb9-3491-4bce-b186-a75b2b333e88">



<br />
<br />
<br />
<br />


# AAVA HEALTH COACH
Welcome to the aava health coach website . This website allows you to calculate and track your calories , it also keeps the record of your previous calories calculated so 
that you can track your progress as well . It also allows you to check the macros of any food item you want along with it's calories so that you can make your own diet plans and adjust your meals accordingly . It also provides you the diet plans according to your goal like whether  you want to loose or gain weight and according to your
diet type as well like whether you want a veg meal plan or non veg meal plan . Plus if you face any difficulty with the meals like you don't know how to make it or what ingredients would be required or whether this meal would be a good option or will it be fit in my daily calorie consumption , We also provide a recipe option in our website
where you can search for any recipe you want along with it's macros and calories and can you can also get recipes according to the ingredients you have , so that you can eat without guilt and adjust the meals according in your daily routine. This website is even better than a personal dietician . 
<br />
<br />
<br />
<br />

<p align="center">
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/b51c5f80-00fd-4a8b-acf4-c101a582e7c3" alt="Image 1" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/c726a72b-493b-4f42-91fd-6c67a25d5aad" alt="Image 2" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/c072e671-9c67-4c2b-a76d-bdb46e3031a2" alt="Image 3" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/bc3561b5-e5d6-4c7a-992e-874bdcf69c56" alt="Image 4" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/62d8748d-ff7c-4bee-88fd-874dce032ec6" alt="Image 5" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/ddacda58-a8d4-447e-ab9f-8748bbc722b0" alt="Image 6" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/c8a97f9a-0331-4937-bce8-6f39130ccc6a" alt="Image 7" width="450" />
  <br />
  <img src="https://github.com/rahulrana701/Dietician/assets/123585591/805df3a6-2a96-4b4d-919a-6e30e693fb6a" alt="Image 8" width="450" />
</p>


# TECH STACK USED

<ul style="circle">
  <li>
    React 
  </li>
   <li>
    Css 
  </li>
   <li>
    Nodejs 
  </li>
   <li>
    Expressjs 
  </li>
   <li>
    Mongodb
  </li>
</ul>

# RUN LOCALLY
1. Clone the project

```bash
  git clone https://github.com/rahulrana701/Dietician.git
```

2. Go to the project directory

```bash
  cd dietician
```
2. Go to the backend folder

```bash
  cd backend
```

3. Install dependencies

```bash
  npm install
```

4. Create a `.env` file in the root directory of the backend.

5. Open the `.env` file and add the following lines, replacing `"key1"`, `"key2"` with your actual jwt secret and databaseurl(connection string).
```plaintext
JWT_SECRET="key1"
DB_URL="key2"
```

6. Start the server

```bash
  nodemon app.js
```
7. Your backend server will start

8. Now open a new terminal

9. Install dependencies

```bash
  npm install
```
10. Create a `.env.` file in the root directory of the project.
 Open the `.env.` file and add the following lines, replacing `"apikey1"`, `"apiid1"`,  `"apikey2"`and `"apiid2"` with your actual API keys and ID's obtained from the Edamam Nutrtion API:
```plaintext
REACT_APP_API_KEY_1="apikey1"
REACT_APP_API_ID_1="apiid1"
REACT_APP_API_KEY_2="apikey2"
REACT_APP_API_ID_2="apiid2"
```
10.  Start the server

```bash
  npm start
```
11. Open your browser and visit http://localhost:3000 to access the  website.
12. To run the  server on localhost replace 'https://dietician-pi8g.onrender.com' with 'https://localhost:5000' wherever it is used.

Used Edamam Nutrtion API in this website , Further In Edamam nutrion API used it's Nutrional Analysis API and Recipes API , please note that you can only search for up to 5000 recipes/fooditems-macros per day with one API key due to the limitations of this API.

## Important Note
Please keep in mind that the information provided by us is based on the data obtained from the "Edamam Nutrition" API .We always strive to provide accurate and up-to-date information. We apologize for any inconvenience caused.

## LIVE LINK OF THE WEBSITE 
https://dietician23.netlify.app/

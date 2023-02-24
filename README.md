# Project Title : Currency_Exchange Project

## About the Project: 📚
In this Project we have created a dashboard which allow users to analyze the exchange rates between two currencies over a period of time. Users have option to select start and end date for displaying currency chart. Data is printed in the form of chart using chart.js technology. Input will be currency exchange rate chart from dataset between a base currency(USD) and given input currency over given input time line.

## Work Flow
- The web application has been created using React js. React makes it painless to create interactive UIs, and effectively updates and renders the correct components as the data changes. 
- The front end has 1 input for the currency and 2 inputs for start and end date, according to which currency exchange rate will be displayed compared to base currency USD.
- We have converted given CSV file to JSON format using reactJS by importing papaparse npm module.
- Then we filter data which is in JSON format according to date and currency using function.
- With the help of chartJS package we plot graph for user entered values of currency and timeline.
(Due to the lack  of time, we just convert data of only 2months (1 Jan 2012 to 29 feb 2012)). In future we can definitely convert entire data from CSV or excel files into json format. So that it will work for any date.)

## Technologies Used: 
⚛️ React js, Chart.js , npm packages

## Setup / Installation: 💻

## Clone this respository Setting React App
- npx create-react-app my-app
- cd my-app
- npm start

## Screenshots: 📷
![1](https://user-images.githubusercontent.com/97447480/205901106-26f23004-73af-4f71-8978-79fbcf66f9c8.jpg)

## Output
![2](https://user-images.githubusercontent.com/97447480/205901144-424e0575-36cd-406e-ac5d-1c9e40508377.jpg)

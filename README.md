# kenkō / 健康

## kenkō: Japanese word for 'health'

<img src="https://akshajmodyportfolio.s3-us-west-1.amazonaws.com/KenkoDemo1.png" width=800>

>kenkō is a full-stack health app designed for users to generate and customize unique diet and meal optimizations specifically for longevity and holistic health via science-driven nutrition. The purpose of this app is to both educate and inspire users to unlock their full dietary and living potential.



## Current Features
- Cuisine selection currently featuring Japanese, Korean, and Mediterranean options
- Unique meal plan generation with ingredients and supplements specific to cuisine
- Ingredients and supplements are retrieved from PostgreSQL database and each combination is unrepeated
- Hovering over listed ingredient(s) displays primary benefits and/or instructions
- Uploading generated meal plan to a 'favorites' database

## Getting Started
> Install dependencies
```
npm install
```
> Replace the locations in db/schema.sql with local file path of nutritional information csv files in db/csvData

```
COPY vegetables(id, vegetable, utility) FROM '/Users/akshajmody/Documents/kenko_folder/project_kenko/db/csvData/vegetables.csv' WITH DELIMITER ',';
```
> Seed PostgreSQL database
```
psql postgres < schema.sql
```
>Start the local server:
```
npm run start:prod
```
>Build the Webpack bundle
```
npm run build:prod
```
>On your preferred browser, navigate to http://localhost:3005/

## Cuisine Selection Page
<img src="https://akshajmodyportfolio.s3-us-west-1.amazonaws.com/KenkoDemo2.png" width=800>

## Generated Unique Meal Page Example
<img src="https://akshajmodyportfolio.s3-us-west-1.amazonaws.com/KenkoDemo4.png" width=800>

## Generated Unique Meal Page Example 2
<img src="https://akshajmodyportfolio.s3-us-west-1.amazonaws.com/KenkoDemo3.png" width=800>

## Goals
> Longevity and nutrition have been fascinations of mine for as long as I can remember. As such, the goal of this app is to instill that passion in others. I hope to educate users with this app, shifting the focus onto real foods that encourage humans to reach and surpass their maximum physical and mental potentials.

## Features in Development
- Updating PostgreSQL database to include macronutrient and micronutrient metrics for each ingredient
- Utilizing Chart.js to create radar graphs for each generated plan to visually display micronutrient, macronutrient, and benefits breakdown
- User profile creation and authentication with Auth0
- Saving and sharing generated plans between users
- Supported plans for diabetics, vegetarians, and other dietary restrictions
- Modular weekly generated plans




# Smart Hygiene Risk Prediction System

## Project Overview

The Smart Hygiene Risk Prediction System is an AI/ML project that predicts the hygiene risk level of a facility as **High, Medium, or Low**.

The system uses facility hygiene and operational information such as cleanliness score, odor score, waste level, complaints, footfall, and hours since cleaning.

## Objective

The main objective is to build a machine learning system that can:

* Preprocess facility data
* Perform exploratory data analysis
* Select relevant features
* Train a classification model
* Evaluate model performance
* Predict hygiene risk for new facilities
* Visualize important features

## Dataset

The dataset contains **995 facility records and 12 original columns**.

Important features include:

* Cleanliness score
* Odor score
* Waste level
* Water availability
* Footfall
* Complaints
* Hours since cleaning

The target variable is:

* `hygiene_risk`

The target contains three classes:

* High
* Medium
* Low

## Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* Seaborn
* Scikit-learn
* Jupyter Notebook
* Joblib

## Machine Learning Workflow

1. Data loading
2. Data inspection
3. Missing value handling
4. Exploratory Data Analysis
5. Feature engineering
6. Categorical encoding
7. Feature selection
8. Train-test split
9. Random Forest model training
10. Model evaluation
11. Feature importance visualization
12. New facility risk prediction
13. Basic model testing
14. Model saving

## Preprocessing

Missing values were handled using:

* Median imputation for `waste_level`
* Mode imputation for `water_availability`

A new feature called `complaints_per_100_footfall` was created to represent the complaint rate relative to facility footfall.

Categorical features were encoded using `LabelEncoder`.

## Model

A **Random Forest Classifier** was used for hygiene risk classification.

The dataset was divided into:

* 80% training data
* 20% testing data

The model achieved:

**Accuracy: 87.94%**

## Feature Importance

The model's feature importance analysis showed that the main contributing features included:

* Cleanliness score
* Odor score
* Complaints
* Waste level
* Hours since cleaning

## Prediction

The trained model can predict the hygiene risk of a new facility based on its input features.

Example prediction:

**Predicted Hygiene Risk: High**

## Testing

Basic tests were performed to verify:

* Prediction output
* Matching test and prediction sizes
* Minimum model accuracy requirement

All basic model tests passed.

## Project Structure

```text
day-10/
└── final-project/
    ├── ml/
    │   ├── data/
    │   │   └── cleaned_facilities.csv
    │   ├── models/
    │   │   ├── hygiene_risk_model.pkl
    │   │   └── target_encoder.pkl
    │   ├── notebooks/
    │   │   └── smart_hygiene_risk_prediction.ipynb
    │   └── src/
    └── README.md
```

## Conclusion

The project demonstrates an end-to-end machine learning workflow for predicting facility hygiene risk. It includes preprocessing, EDA, feature engineering, model training, evaluation, visualization, prediction, testing, and model saving.

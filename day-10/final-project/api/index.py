from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
import os

app = FastAPI(title="Smart Hygiene Risk Prediction API")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "ml", "models")

model = joblib.load(os.path.join(MODEL_DIR, "hygiene_risk_model.pkl"))
target_encoder = joblib.load(os.path.join(MODEL_DIR, "target_encoder.pkl"))


class FacilityData(BaseModel):
    location: str
    facility_type: str
    cleanliness_score: float
    odor_score: float
    waste_level: float
    water_availability: str
    footfall: int
    complaints: int
    hours_since_cleaning: float


@app.get("/api")
def home():
    return {"message": "Smart Hygiene Risk Prediction API is running"}


@app.post("/api")
def predict(data: FacilityData):
    try:
        location_mapping = {
            "Civil Lines": 0,
            "Dharampeth": 1,
            "Hingna": 2,
            "Kamptee Road": 3,
            "Manish Nagar": 4,
            "Mihan": 5,
            "Nagpur Central": 6,
            "Sadar": 7,
            "Sitabuldi": 8,
            "Wardha Road": 9
        }

        facility_mapping = {
            "Hospital Washroom": 0,
            "Mall Washroom": 1,
            "Office Washroom": 2,
            "Public Washroom": 3,
            "School Washroom": 4,
            "Transit Washroom": 5
        }

        water_mapping = {
            "Available": 1,
            "Not Available": 0
        }

        location = location_mapping[data.location]
        facility_type = facility_mapping[data.facility_type]
        water_availability = water_mapping[data.water_availability]

        complaints_per_100_footfall = (
            data.complaints / data.footfall
        ) * 100

        input_data = pd.DataFrame([{
            "location": location,
            "facility_type": facility_type,
            "cleanliness_score": data.cleanliness_score,
            "odor_score": data.odor_score,
            "waste_level": data.waste_level,
            "water_availability": water_availability,
            "footfall": data.footfall,
            "complaints": data.complaints,
            "hours_since_cleaning": data.hours_since_cleaning,
            "complaints_per_100_footfall": complaints_per_100_footfall
        }])

        prediction = model.predict(input_data)
        risk = target_encoder.inverse_transform(prediction)[0]

        return {
            "success": True,
            "hygiene_risk": risk
        }

    except Exception as error:
        return {
            "success": False,
            "error": str(error)
        }
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
feature_encoders = joblib.load(os.path.join(MODEL_DIR, "feature_encoders.pkl"))


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
        location = feature_encoders["location"].transform([data.location])[0]
        facility_type = feature_encoders["facility_type"].transform(
            [data.facility_type]
        )[0]
        water_availability = feature_encoders["water_availability"].transform(
            [data.water_availability]
        )[0]

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
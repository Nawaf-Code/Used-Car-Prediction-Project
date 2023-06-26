from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import pickle
import os

class CarData(BaseModel):
    selectedBrand: dict
    selectedModel: dict
    selectedOption: dict
    selectedColor: dict
    selectedGearType: dict
    year: int
    odometer: int
    engineSize: float


current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'usedCarPredictionModel.sav')
df_path = os.path.join(current_dir, 'empty_df.csv')

with open(model_path, 'rb') as f:
    rf = pickle.load(f)

df_empty = pd.read_csv(df_path)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
async def predict_price(car_data: CarData):
    brand = car_data.selectedBrand
    model = car_data.selectedModel
    option = car_data.selectedOption
    color = car_data.selectedColor
    gear = car_data.selectedGearType
    year = car_data.year
    mileage = car_data.odometer
    engine = car_data.engineSize

    def price_prediction(brand, model, option, color, gear, year, mileage, engine):
        Brand = 'Brand_' + brand['value']
        Model = 'Model_' + model['value']
        Option = 'Options_' + option['value']
        Color = 'Color_' + color['value']
        Gear = 'Gear_Type_' + gear['value']
        df_empty.loc[0, 'Year'] = year
        df_empty.loc[0, 'Engine_Size'] = engine
        df_empty.loc[0, 'Mileage'] = mileage
        df_empty.loc[0, Color] = 1
        df_empty.loc[0, Option] = 1
        df_empty.loc[0, Gear] = 1
        df_empty.loc[0, Brand] = 1
        df_empty.loc[0, Model] = 1
        price = rf.predict(df_empty)
        return int(price[0])

    price = price_prediction(brand, model, option, color, gear, year, mileage, engine)


    return {"price": price}

#uvicorn fastAPI-server.server:app --reload --port=8080 --host=192.168.0.100 ip of network
#uvicorn fastAPI-server.server:app --reload --port=8080 --host=172.20.10.14 ip of my phone
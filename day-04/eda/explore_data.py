import pandas as pd


# Load cleaned dataset
df = pd.read_csv("dataset/cleaned_facilities.csv")


print("Dataset Shape:")
print(df.shape)


print("\nDataset Columns:")
print(df.columns.tolist())


print("\nMissing Values:")
print(df.isnull().sum())


print("\nHygiene Risk Distribution:")
print(df["hygiene_risk"].value_counts())


print("\nNumerical Summary:")
print(df.describe())


print("\nAverage Feature Values by Hygiene Risk:")
print(
    df.groupby("hygiene_risk")[
        [
            "cleanliness_score",
            "odor_score",
            "waste_level",
            "complaints",
            "footfall",
            "hours_since_cleaning"
        ]
    ].mean()
)
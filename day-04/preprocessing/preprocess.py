import pandas as pd

# Load cleaned dataset
df = pd.read_csv("dataset/cleaned_facilities.csv")

# Select features required for ML
features = [
    "cleanliness_score",
    "odor_score",
    "waste_level",
    "complaints",
    "footfall",
    "hours_since_cleaning"
]

target = "hygiene_risk"

# Keep only required columns
df = df[features + [target]]

# Handle missing values
df["waste_level"] = df["waste_level"].fillna(df["waste_level"].median())

# Separate features and target
X = df[features]
y = df[target]

# Save processed features and target
X.to_csv("dataset/X_processed.csv", index=False)
y.to_csv("dataset/y_processed.csv", index=False)

print("Preprocessing completed successfully.")
print("Features shape:", X.shape)
print("Target shape:", y.shape)
print("\nMissing values after preprocessing:")
print(X.isnull().sum())
print("\nTarget distribution:")
print(y.value_counts())
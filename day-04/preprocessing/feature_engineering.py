import pandas as pd

# Load processed features
X = pd.read_csv("dataset/X_processed.csv")

# Feature engineering
# Calculate complaints per 100 visitors
X["complaints_per_100_footfall"] = (
    X["complaints"] / X["footfall"]
) * 100

# Save engineered features
X.to_csv("dataset/X_engineered.csv", index=False)

print("Feature engineering completed successfully.")

print("\nEngineered dataset shape:")
print(X.shape)

print("\nEngineered features:")
print(X.columns.tolist())

print("\nFirst 5 rows:")
print(X.head())
import pandas as pd

# Read the dataset
df = pd.read_csv("../dataset/facilities.csv")

# Display basic information
print("First 5 rows:")
print(df.head())

print("\nDataset shape:")
print(df.shape)

print("\nColumn names:")
print(df.columns)

# Check data types
print("\nData types:")
print(df.dtypes)

# Check missing values
print("\nMissing values:")
print(df.isnull().sum())

# Check duplicate rows
print("\nDuplicate rows:")
print(df.duplicated().sum())

# Check invalid cleanliness scores
invalid_cleanliness = df[
    (df["cleanliness_score"] < 0) |
    (df["cleanliness_score"] > 10)
]

print("\nInvalid cleanliness scores:")
print(invalid_cleanliness)

# Check invalid odor scores
invalid_odor = df[
    (df["odor_score"] < 0) |
    (df["odor_score"] > 10)
]

print("\nInvalid odor scores:")
print(invalid_odor)

# Remove duplicate rows
df = df.drop_duplicates()

# Replace invalid cleanliness scores with missing values
df.loc[
    (df["cleanliness_score"] < 0) |
    (df["cleanliness_score"] > 10),
    "cleanliness_score"
] = pd.NA

# Fill missing cleanliness scores with median
df["cleanliness_score"] = df["cleanliness_score"].fillna(
    df["cleanliness_score"].median()
)

# Fill missing complaints with median
df["complaints"] = df["complaints"].fillna(
    df["complaints"].median()
)
# Detect outliers in footfall using IQR method
Q1 = df["footfall"].quantile(0.25)
Q3 = df["footfall"].quantile(0.75)

IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[
    (df["footfall"] < lower_bound) |
    (df["footfall"] > upper_bound)
]

print("\nFootfall outliers:")
print(outliers[["facility_id", "location", "footfall"]])
# Save cleaned dataset
df.to_csv("../dataset/cleaned_facilities.csv", index=False)

print("\nCleaning completed.")
print("Final dataset shape:", df.shape)
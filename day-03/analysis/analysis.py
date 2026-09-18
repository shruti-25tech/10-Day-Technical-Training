import pandas as pd

# Read cleaned dataset
df = pd.read_csv("dataset/cleaned_facilities.csv")

# Basic statistics
print("===== BASIC STATISTICS =====")
print(df.describe())

# Average cleanliness score
print("\nAverage cleanliness score:")
print(df["cleanliness_score"].mean())

# Average odor score
print("\nAverage odor score:")
print(df["odor_score"].mean())

# Average footfall
print("\nAverage footfall:")
print(df["footfall"].mean())

# Average complaints
print("\nAverage complaints:")
print(df["complaints"].mean())

# Location-wise analysis
print("\n===== LOCATION-WISE ANALYSIS =====")
location_analysis = df.groupby("location").agg(
    average_cleanliness=("cleanliness_score", "mean"),
    average_footfall=("footfall", "mean"),
    total_complaints=("complaints", "sum")
)

print(location_analysis)

# Waste level analysis
print("\n===== WASTE LEVEL ANALYSIS =====")
print(df.groupby("waste_level")["complaints"].mean())

# Water availability analysis
print("\n===== WATER AVAILABILITY ANALYSIS =====")
print(df.groupby("water_availability")["complaints"].mean())

# Highest complaints
print("\n===== TOP FACILITIES BY COMPLAINTS =====")
print(
    df.sort_values("complaints", ascending=False)[
        ["facility_id", "location", "complaints"]
    ].head()
)

# Lowest cleanliness
print("\n===== LOWEST CLEANLINESS SCORES =====")
print(
    df.sort_values("cleanliness_score")[
        ["facility_id", "location", "cleanliness_score"]
    ].head()
)
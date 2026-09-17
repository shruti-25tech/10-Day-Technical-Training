import pandas as pd
import matplotlib.pyplot as plt

# Read cleaned dataset
df = pd.read_csv("../dataset/cleaned_facilities.csv")

# Convert inspection date to datetime
df["inspection_date"] = pd.to_datetime(df["inspection_date"])

# 1. Bar chart - Average cleanliness by location
cleanliness = df.groupby("location")["cleanliness_score"].mean()

plt.figure(figsize=(8, 5))
cleanliness.plot(kind="bar")
plt.title("Average Cleanliness Score by Location")
plt.xlabel("Location")
plt.ylabel("Average Cleanliness Score")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("bar_cleanliness.png")
plt.close()


# 2. Bar chart - Average footfall by location
footfall = df.groupby("location")["footfall"].mean()

plt.figure(figsize=(8, 5))
footfall.plot(kind="bar")
plt.title("Average Footfall by Location")
plt.xlabel("Location")
plt.ylabel("Average Footfall")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("bar_footfall.png")
plt.close()


# 3. Histogram - Complaints
plt.figure(figsize=(8, 5))
plt.hist(df["complaints"], bins=6)
plt.title("Distribution of Complaints")
plt.xlabel("Number of Complaints")
plt.ylabel("Number of Facilities")
plt.tight_layout()
plt.savefig("histogram_complaints.png")
plt.close()


# 4. Scatter plot - Footfall vs complaints
plt.figure(figsize=(8, 5))
plt.scatter(df["footfall"], df["complaints"])
plt.title("Footfall vs Complaints")
plt.xlabel("Footfall")
plt.ylabel("Complaints")
plt.tight_layout()
plt.savefig("scatter_footfall_complaints.png")
plt.close()


# 5. Line chart - Complaints over inspection dates
plt.figure(figsize=(10, 5))
plt.plot(df["inspection_date"], df["complaints"], marker="o")
plt.title("Complaints Over Inspection Dates")
plt.xlabel("Inspection Date")
plt.ylabel("Complaints")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("inspection_trend.png")
plt.close()

print("All visualizations created successfully.")
import pandas as pd

FILE_NAME = "employees.csv"


try:
    df = pd.read_csv(FILE_NAME)

    print("----- Dataset -----")
    print(df)

    print("\n----- Record Count -----")
    print("Total records:", len(df))

    print("\n----- Missing Values -----")
    print(df.isnull().sum())

    print("\n----- Duplicate Records -----")
    print("Duplicate records:", df.duplicated().sum())

    print("\n----- Salary Statistics -----")
    print("Average salary:", df["salary"].mean())
    print("Minimum salary:", df["salary"].min())
    print("Maximum salary:", df["salary"].max())

    print("\n----- Department-wise Statistics -----")

    statistics = df.groupby("department")["salary"].agg(
        ["count", "mean", "min", "max"]
    )

    print(statistics)


except FileNotFoundError:
    print("CSV file not found.")

except Exception as error:
    print("Error:", error)
\# Day 3 - Data Analysis \& Python for AI/ML



\## Objective



The objective of this task was to inspect, clean, analyze and visualize a real-world facility dataset using Python, Pandas, NumPy and Matplotlib.



\## Dataset



The dataset contains information about facilities, including:



\* Facility ID

\* Location

\* Cleanliness score

\* Odor score

\* Waste level

\* Water availability

\* Footfall

\* Complaints

\* Inspection date



The original dataset contained 21 rows after adding a duplicate record.



\## Data Cleaning



The following data quality checks and cleaning operations were performed:



\* Checked dataset structure and data types.

\* Checked missing values.

\* Identified duplicate records.

\* Identified invalid cleanliness scores.

\* Checked invalid odor scores.

\* Removed duplicate records.

\* Replaced invalid cleanliness scores with missing values.

\* Filled missing cleanliness scores using the median.

\* Filled missing complaints using the median.

\* Detected footfall outliers using the IQR method.



\### Cleaning Results



\* Original rows: 21

\* Duplicate rows identified: 1

\* Final rows: 20

\* Missing values after cleaning: 0

\* Invalid cleanliness scores identified: 2

\* Footfall outliers identified: F007 and F014



\## Analysis



Basic statistics were calculated for cleanliness score, odor score, footfall and complaints.



\### Important Statistics



\* Average cleanliness score: 6.9

\* Average odor score: 4.05

\* Average footfall: 1458.5

\* Average complaints: 29.25



\## Key Insights



1\. Nagpur has the highest average cleanliness score at 9.33, while Yavatmal has the lowest at 4.33.



2\. Facilities with high waste levels have the highest average complaints (55), compared with medium waste (31.43) and low waste (11.25).



3\. Facilities without water availability have higher average complaints (50) compared with facilities where water is available (24.06).



4\. Mumbai has the highest average footfall at 8750, mainly because one facility has an unusually high footfall of 15000.



5\. F014 has the highest number of complaints with 80, followed by F007 with 75.



\## Visualizations



The following visualizations were created using Matplotlib:



1\. Average cleanliness score by location

2\. Average footfall by location

3\. Distribution of complaints

4\. Footfall vs complaints scatter plot

5\. Complaints over inspection dates



\## Project Structure



```text

day-03/

├── dataset/

│   ├── facilities.csv

│   └── cleaned\_facilities.csv

├── data-cleaning/

│   └── clean\_data.py

├── analysis/

│   └── analysis.py

├── visualizations/

│   ├── create\_visualizations.py

│   ├── bar\_cleanliness.png

│   ├── bar\_footfall.png

│   ├── histogram\_complaints.png

│   ├── scatter\_footfall\_complaints.png

│   └── inspection\_trend.png

└── README.md

```



\## Tools and Technologies



\* Python

\* NumPy

\* Pandas

\* Matplotlib

\* CSV dataset

\* IQR method for outlier detection



\## Conclusion



The facility dataset was successfully cleaned, analyzed and visualized. The analysis helped identify data quality issues, facility-level patterns, complaint trends and potential outliers.




\# Day 4 – Machine Learning



\## Objective



Build a machine learning model to predict facility hygiene risk using facility-related data.



\## Problem Type



This is a \*\*multiclass classification\*\* problem because the target `hygiene\_risk` has three classes:



\* High

\* Medium

\* Low



\## Dataset



The dataset contains \*\*995 facility records\*\*.



\### Features Used



\* cleanliness\_score

\* odor\_score

\* waste\_level

\* complaints

\* footfall

\* hours\_since\_cleaning



\### Target



\* hygiene\_risk



\## Preprocessing



\* Selected the required ML features.

\* Filled missing `waste\_level` values using the median.

\* Split the data into \*\*80% training\*\* and \*\*20% testing\*\* data.

\* Used stratified splitting to maintain class distribution.

\* Standardized features for Logistic Regression.



\## Exploratory Data Analysis



The analysis showed that:



\* High-risk facilities generally had lower cleanliness scores.

\* High-risk facilities had higher odor, waste levels, complaints, and hours since cleaning.

\* Low-risk facilities generally showed the opposite pattern.

\* The dataset contained 410 Medium, 313 Low, and 272 High-risk records.



\## Feature Engineering



Created an additional feature:



`complaints\_per\_100\_footfall`



This represents the number of complaints relative to facility footfall.



\## Models Used



1\. Logistic Regression

2\. Decision Tree Classifier



\## Model Evaluation



| Model               | Accuracy | Precision | Recall | F1 Score |

| ------------------- | -------: | --------: | -----: | -------: |

| Logistic Regression |   89.45% |    89.55% | 89.45% |   89.48% |

| Decision Tree       |   74.37% |    75.83% | 74.37% |   74.51% |



The evaluation was performed on the 20% held-out test set. Logistic Regression produced higher values for all four metrics on this test split.



\## Confusion Matrix



\### Logistic Regression



```text

\[\[48  6  0]

&#x20;\[ 5 73  4]

&#x20;\[ 0  6 57]]

```



Labels: High, Medium, Low



\### Decision




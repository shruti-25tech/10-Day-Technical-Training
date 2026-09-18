import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score


# Load processed data
X = pd.read_csv("dataset/X_engineered.csv")
y = pd.read_csv("dataset/y_processed.csv").squeeze()


# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)


print("Training samples:", X_train.shape[0])
print("Testing samples:", X_test.shape[0])


# Logistic Regression with feature scaling
logistic_model = Pipeline([
    ("scaler", StandardScaler()),
    ("model", LogisticRegression(max_iter=1000))
])


# Decision Tree
decision_tree_model = DecisionTreeClassifier(
    random_state=42,
    max_depth=5
)


# Train models
logistic_model.fit(X_train, y_train)
decision_tree_model.fit(X_train, y_train)


# Predictions
logistic_predictions = logistic_model.predict(X_test)
tree_predictions = decision_tree_model.predict(X_test)


# Basic accuracy comparison
logistic_accuracy = accuracy_score(y_test, logistic_predictions)
tree_accuracy = accuracy_score(y_test, tree_predictions)


print("\nModel Performance")
print("-----------------")
print("Logistic Regression Accuracy:", round(logistic_accuracy, 4))
print("Decision Tree Accuracy:", round(tree_accuracy, 4))


# Save predictions
predictions = pd.DataFrame({
    "Actual": y_test.values,
    "Logistic_Regression": logistic_predictions,
    "Decision_Tree": tree_predictions
})

predictions.to_csv("predictions/predictions.csv", index=False)

print("\nPredictions saved to predictions/predictions.csv")
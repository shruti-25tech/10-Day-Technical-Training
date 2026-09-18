import pandas as pd

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix
)


# Load predictions
df = pd.read_csv("predictions/predictions.csv")

y_true = df["Actual"]

models = {
    "Logistic Regression": df["Logistic_Regression"],
    "Decision Tree": df["Decision_Tree"]
}


# Store evaluation results
results = []


for model_name, predictions in models.items():

    accuracy = accuracy_score(y_true, predictions)

    precision = precision_score(
        y_true,
        predictions,
        average="weighted"
    )

    recall = recall_score(
        y_true,
        predictions,
        average="weighted"
    )

    f1 = f1_score(
        y_true,
        predictions,
        average="weighted"
    )

    cm = confusion_matrix(
        y_true,
        predictions,
        labels=["High", "Medium", "Low"]
    )

    results.append({
        "Model": model_name,
        "Accuracy": accuracy,
        "Precision": precision,
        "Recall": recall,
        "F1_Score": f1
    })

    print("\n" + "=" * 50)
    print(model_name)
    print("=" * 50)

    print("Accuracy :", round(accuracy, 4))
    print("Precision:", round(precision, 4))
    print("Recall   :", round(recall, 4))
    print("F1 Score :", round(f1, 4))

    print("\nConfusion Matrix")
    print("Rows = Actual")
    print("Columns = Predicted")
    print("Labels = High, Medium, Low")
    print(cm)


# Save evaluation results
results_df = pd.DataFrame(results)

results_df.to_csv(
    "evaluation/model_comparison.csv",
    index=False
)

print("\n" + "=" * 50)
print("Model comparison saved to evaluation/model_comparison.csv")
print("=" * 50)

print(results_df)
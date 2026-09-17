# Day 2 - Python Fundamentals

# Variables and Data Types
name = "Shruti"
age = 21
marks = 75.5

print("Name:", name)
print("Age:", age)
print("Marks:", marks)


# List
numbers = [10, 20, 30, 40, 50]

print("Numbers:", numbers)
print("First number:", numbers[0])


# Tuple
subjects = ("Python", "SQL", "ML")

print("Subjects:", subjects)


# Set
unique_numbers = {10, 20, 20, 30, 30}

print("Unique numbers:", unique_numbers)


# Dictionary
student = {
    "name": "Shruti",
    "branch": "Data Science",
    "semester": 7
}

print("Student:", student)


# Condition
if marks >= 40:
    print("Result: Pass")
else:
    print("Result: Fail")


# Loop
print("Numbers using loop:")

for number in numbers:
    print(number)


# Function
def calculate_average(values):
    return sum(values) / len(values)


average = calculate_average(numbers)

print("Average:", average)


# Lambda
square = lambda x: x * x

print("Square of 5:", square(5))


# List Comprehension
even_numbers = [x for x in numbers if x % 2 == 0]

print("Even numbers:", even_numbers)


# Exception Handling
try:
    number = int(input("Enter a number: "))
    print("You entered:", number)

except ValueError:
    print("Please enter a valid number.")
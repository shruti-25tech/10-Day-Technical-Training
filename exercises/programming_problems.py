# DAY 01 - 15 Programming Problems
# Efficient and beginner-friendly solutions


# 1. Reverse a String
def reverse_string(text):
    return text[::-1]


print("1. Reverse String:")
print(reverse_string("hello"))


# 2. Check Palindrome
def is_palindrome(text):
    return text == text[::-1]


print("\n2. Palindrome:")
print(is_palindrome("madam"))


# 3. Find Largest Number
def find_largest(numbers):
    largest = numbers[0]

    for number in numbers[1:]:
        if number > largest:
            largest = number

    return largest


print("\n3. Largest Number:")
print(find_largest([10, 25, 7, 40, 15]))


# 4. Find Second Largest Number
def find_second_largest(numbers):
    largest = float("-inf")
    second_largest = float("-inf")

    for number in numbers:
        if number > largest:
            second_largest = largest
            largest = number
        elif largest > number > second_largest:
            second_largest = number

    return second_largest


print("\n4. Second Largest Number:")
print(find_second_largest([10, 25, 7, 40, 15]))


# 5. Remove Duplicates
def remove_duplicates(numbers):
    return list(dict.fromkeys(numbers))


print("\n5. Remove Duplicates:")
print(remove_duplicates([1, 2, 2, 3, 4, 4, 5]))


# 6. Find Missing Number
def find_missing_number(numbers):
    n = len(numbers) + 1
    expected_sum = n * (n + 1) // 2

    return expected_sum - sum(numbers)


print("\n6. Missing Number:")
print(find_missing_number([1, 2, 3, 5]))


# 7. Find Duplicate Number
def find_duplicate(numbers):
    seen = set()

    for number in numbers:
        if number in seen:
            return number

        seen.add(number)

    return None


print("\n7. Duplicate Number:")
print(find_duplicate([1, 2, 3, 4, 3, 5]))


# 8. Character Frequency
def character_frequency(text):
    frequency = {}

    for character in text:
        frequency[character] = frequency.get(character, 0) + 1

    return frequency


print("\n8. Character Frequency:")
print(character_frequency("hello"))


# 9. First Non-Repeating Character
def first_non_repeating(text):
    frequency = {}

    for character in text:
        frequency[character] = frequency.get(character, 0) + 1

    for character in text:
        if frequency[character] == 1:
            return character

    return None


print("\n9. First Non-Repeating Character:")
print(first_non_repeating("swiss"))


# 10. Merge Two Sorted Arrays
def merge_sorted_arrays(array1, array2):
    result = []
    i = 0
    j = 0

    while i < len(array1) and j < len(array2):

        if array1[i] <= array2[j]:
            result.append(array1[i])
            i += 1
        else:
            result.append(array2[j])
            j += 1

    result.extend(array1[i:])
    result.extend(array2[j:])

    return result


print("\n10. Merge Sorted Arrays:")
print(merge_sorted_arrays([1, 3, 5], [2, 4, 6]))


# 11. Find Common Elements
def common_elements(array1, array2):
    return list(set(array1) & set(array2))


print("\n11. Common Elements:")
print(common_elements([1, 2, 3, 4], [3, 4, 5, 6]))


# 12. Stack
class Stack:

    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.items:
            return None

        return self.items.pop()

    def peek(self):
        if not self.items:
            return None

        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0


print("\n12. Stack:")

stack = Stack()

stack.push(10)
stack.push(20)
stack.push(30)

print("Stack:", stack.items)
print("Top:", stack.peek())
print("Pop:", stack.pop())
print("After Pop:", stack.items)


# 13. Queue
from collections import deque


class Queue:

    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.items:
            return None

        return self.items.popleft()

    def front(self):
        if not self.items:
            return None

        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0


print("\n13. Queue:")

queue = Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print("Queue:", list(queue.items))
print("Front:", queue.front())
print("Dequeue:", queue.dequeue())
print("After Dequeue:", list(queue.items))


# 14. Maximum Subarray Sum - Kadane's Algorithm
def maximum_subarray_sum(numbers):
    current_sum = numbers[0]
    maximum_sum = numbers[0]

    for number in numbers[1:]:
        current_sum = max(number, current_sum + number)
        maximum_sum = max(maximum_sum, current_sum)

    return maximum_sum


print("\n14. Maximum Subarray Sum:")
print(maximum_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


# 15. Sorting Without Built-in Sorting
# Insertion Sort
def insertion_sort(numbers):
    numbers = numbers.copy()

    for i in range(1, len(numbers)):
        key = numbers[i]
        j = i - 1

        while j >= 0 and numbers[j] > key:
            numbers[j + 1] = numbers[j]
            j -= 1

        numbers[j + 1] = key

    return numbers


print("\n15. Sorting Without Built-in Sort:")
print(insertion_sort([5, 2, 8, 1, 3]))
# ===== COMMENTS =====
# Commentaire simple

"""
Commentaire multi-lignes
ou docstring
"""

# ===== IMPORTS =====
import math
import os as operating_system
from collections import defaultdict, namedtuple

# ===== CONSTANTS =====
PI = 3.14159
MAX_VALUE = 100

# ===== VARIABLES =====
integer = 42
floating = 3.14
complex_num = 2 + 3j
string = "Hello"
f_string = f"Value = {integer}"
raw_string = r"\n not interpreted"
boolean = True
none_value = None

# ===== COLLECTIONS =====
list_example = [1, 2, 3]
tuple_example = (1, 2, 3)
set_example = {1, 2, 3}
dict_example = {"key": "value", "num": 42}

# ===== FUNCTION =====
def add(a: int, b: int) -> int:
    """Function with type hints"""
    return a + b

# ===== LAMBDA =====
square = lambda x: x * x

# ===== CLASS =====
class Person:
    species = "Human"  # class variable

    def __init__(self, name: str, age: int):
        self.name = name      # instance variable
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}")

    @staticmethod
    def static_method():
        return "static"

    @classmethod
    def create_default(cls):
        return cls("John Doe", 0)

# ===== INHERITANCE =====
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

# ===== CONTROL FLOW =====
if integer > 0 and integer < 100:
    print("Valid")
elif integer == 0:
    print("Zero")
else:
    print("Negative")

# ===== LOOPS =====
for i in range(5):
    print(i)

while integer > 0:
    integer -= 1

# ===== TRY / EXCEPT =====
try:
    x = 1 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
finally:
    print("Done")

# ===== WITH =====
with open("test.txt", "w") as f:
    f.write("Hello")

# ===== COMPREHENSIONS =====
squares = [x**2 for x in range(10)]
even_set = {x for x in range(10) if x % 2 == 0}
dict_comp = {x: x**2 for x in range(5)}

# ===== GENERATOR =====
def countdown(n):
    while n > 0:
        yield n
        n -= 1

# ===== DECORATOR =====
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)
        print("After")
        return result
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# ===== MATCH (Python 3.10+) =====
def check_value(x):
    match x:
        case 0:
            return "zero"
        case 1 | 2:
            return "one or two"
        case _:
            return "other"

# ===== OPERATORS =====
a = 10 + 5 * 2
a += 1
a -= 1
a *= 2
a /= 3
a //= 2
a %= 2
a **= 3

# ===== BOOLEAN / COMPARISON =====
result = (a > 5) and (a < 100) or not False

# ===== SLICING =====
text = "Hello World"
slice1 = text[0:5]
slice2 = text[::-1]

# ===== ENUM-LIKE =====
from enum import Enum
class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

# ===== ASSERT =====
assert a >= 0, "a should be positive"

# ===== GLOBAL / NONLOCAL =====
global_var = 0

def outer():
    nonlocal_var = 1
    def inner():
        nonlocal nonlocal_var
        nonlocal_var += 1
    inner()

# ===== MAGIC METHODS =====
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

# ===== MAIN GUARD =====
if __name__ == "__main__":
    p = Person("Alice", 25)
    p.greet()
    say_hello()
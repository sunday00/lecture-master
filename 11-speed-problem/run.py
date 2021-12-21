import time
import hello

print("========Cython=========")
s = time.time()
result = hello.cython_add(13000, 13000)
print(result)
print( time.time() - s )


print("========Python=========")
def python_add(num1: int, num2: int):
    result = 0
    for i in range(num1):
        for _ in range(num2):
            result += i
    return result

s = time.time()
result = python_add(13000, 13000)
print(result)
print( time.time() - s )
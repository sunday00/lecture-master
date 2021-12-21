def hello():
    print("hello cython")

hello()

cpdef cython_add(int num1, int num2):
    cpdef long long result, i, j
    result = 0
    for i in range(num1):
        for _ in range(num2):
            result += i
    return result
import os
import time
from functools import wraps

from multiprocessing import Process

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f'Success. {end-start} taken for {func.__name__}\n')
        return result
    return wrapper

def f(x):
    print(x * x)

if __name__ == '__main__':
    @timer
    def run() :
            procs = []
            numbers = list(range(1, 5))
            for i in numbers:
                proc = Process(target=f, args=(i,))
                procs.append(proc)
                proc.start()

            for p in procs:
                p.join()

    run()
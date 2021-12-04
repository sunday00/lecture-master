from multiprocessing import Pool
import time
from functools import wraps

def f(x):
    return [x * i for i in range(1, 1000000)]

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f'Success. {end-start} taken for {func.__name__}\n')
        return result
    return wrapper

@timer
def run():
    with Pool(4) as p :
        p.map(f, range(1 , 4))
    # print(result)

if __name__ == '__main__':
    run()
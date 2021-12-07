from multiprocessing import Pool
from functools import partial

def loopthis(x, y):
    return x + y[x]

ySetted = partial(loopthis, y = range(300, 400))

if __name__ == "__main__":
    with Pool(4) as pool:
        m = pool.map(ySetted, range(100))
    pool.join()
    print(m)
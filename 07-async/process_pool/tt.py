import multiprocessing
import time

def count(_):
    num = 0
    for i in range(1,5000001):
        num += i
    return num

start_time = time.time()

if __name__ == '__main__':
    with multiprocessing.Pool(processes=4) as pool:
        l = pool.map(count, range(0,10))
    pool.join()
    print(l)
    print("multiprocessing: --- %s seconds ---" % (time.time() - start_time))

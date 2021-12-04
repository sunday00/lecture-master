import multiprocessing
import time

def count(_):
    num = 0
    for i in range(1,10):
        num += i
        print(f"t:{num}")
    return num
        
def run():
    start_time = time.time()

    if __name__ == 'process_pool.t':
        pool = multiprocessing.Pool(processes=4)
        l = pool.map(count, range(0,4))
        pool.close()
        pool.join()
        print(l)

    print("multiprocessing: --- %s seconds ---" % (time.time() - start_time))
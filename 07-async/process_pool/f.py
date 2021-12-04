import time

def count(num):
    num = 0
    for i in range(1,10):
        num += i
        print(f"f:{num}")
    return num
 
def run():
    start_time = time.time()

    l = list(map(count, range(0,4)))
    print(l)

    print("serializeprocessing--- %s seconds ---" % (time.time() - start_time))
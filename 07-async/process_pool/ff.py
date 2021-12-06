import time

def count(num):
    num = 0
    for i in range(1,5000001):
        num += i
    return num

start_time = time.time()

l = list(map(count, range(0,10)))
print(l)

print("serializeprocessing--- %s seconds ---" % (time.time() - start_time))
import time

def powpow(_):
    pow_num = []
    for ii in range(5000000):
        pow_num.append( ii + 1 )
    return sum(pow_num)
        
def run():
    start_time = time.time()

    l = list(map(powpow, range(4)))

    print(l)

    print("serializeprocessing: --- %s seconds ---" % (time.time() - start_time))
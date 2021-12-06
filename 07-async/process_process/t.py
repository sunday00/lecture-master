from multiprocessing import Process, Array
import time

def powpow(vs, o):
    pow_num = []
    for ii in range(5000000):
        pow_num.append( ii + 1 )
    vs[o] = sum(pow_num)
        
def run():
    start_time = time.time()
    
    
    if __name__ == 'process_process.t':
        vs = Array('Q', range(4))

        procs = []
        
        for o in vs:
            proc = Process(target=powpow, args=(vs,o))
            procs.append(proc)
            proc.start()

        for p in procs:
            p.join()
        
        print(vs[:])

    print("multiprocessing: --- %s seconds ---" % (time.time() - start_time))
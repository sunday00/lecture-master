from multiprocessing import Pool

def loopthis(args):
    return args[0] + args[1]

if __name__ == "__main__":
    with Pool(4) as pool:
        m = pool.map(loopthis, zip(range(100), range(300, 400)))
    pool.join()
    print(m)
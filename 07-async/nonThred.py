import time

def work(work_id, start, end, result):
    total = 0
    for i in range(start, end):
        total += 1
    result.append(total)

if __name__ == "__main__":
    start = time.time()
    result = []
    work(1, 0, 10000000, result)
    work(2, 10000001, 20000000, result)

    print(sum(result))

    print( time.time() - start )
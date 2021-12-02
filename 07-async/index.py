from threading import Thread
import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f'Success. {end-start} taken for {func.__name__}')
        return result
    return wrapper

@timer
def act() :
    def work(work_id, start, end, result):
        total = 0
        for i in range(start, end):
            total += 1
        result.append(total)

    if __name__ == "__main__":
        # start = time.time()
        result = []
        th1 = Thread(target=work, args=(1, 0, 10000000, result))
        th2 = Thread(target=work, args=(2, 10000001, 20000000, result))

        th1.start()
        th2.start()

        th1.join()
        th2.join()

        print(sum(result))

        # print( time.time() - start )

    # https://ssungkang.tistory.com/entry/python-GIL-Global-interpreter-Lock%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C
    # https://dgkim5360.tistory.com/entry/understanding-the-global-interpreter-lock-of-cpython
    # https://velog.io/@doondoony/Python-GIL

    # CPU bound task 에서는 오히려 오버헤드로 더 느려지지만,
    # 대부분의 네트워크, 입출력 IO Bound task에서는 이러한 GIL 이 release 되므로 성능 개선을 기대할 수 있다고 한다.

act()
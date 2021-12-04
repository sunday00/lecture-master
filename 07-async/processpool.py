from process_pool.t import run as trun
from process_pool.f import run as frun
import multiprocessing

try :
    if __name__ == '__main__':
        multiprocessing.freeze_support()
        frun()
        trun()
except Exception as e:
    print(e)

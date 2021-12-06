from process_process.t import run as trun
from process_process.f import run as frun
from multiprocessing import *

try :
    if __name__ == '__main__':
        freeze_support()
        frun()
        trun()
except Exception as e:
    print(e)

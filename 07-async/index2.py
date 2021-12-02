from threading import Thread

def work(work_id, start, end):
    for i in range(start, end):
        print(f"now id {work_id}: {i} \n")


if __name__ == "__main__":
    th1 = Thread(target=work, args=(1, 0, 10))
    th2 = Thread(target=work, args=(2, 11, 20))

    th1.start()
    th2.start()

    th1.join()
    th2.join()
    # 아니 강사가 제정신이 아닌게, 
    # join은 원래 쓰레드의 의미인 메인 쓰레드는 메인 쓰레드대로 진행하고, 서브 쓰레드는 서브 쓰레드 대로 시작하므로, 
    # 해당 join 함수 호출이 없으면 메인쓰레드가 먼저 끝날 수 있다. 
    # join은 서브 쓰레드의 종료까지 끝나고 메신쓰레드와의 진행을 join한 다음 진행한다는 의미이다.
    # 따라서 join 함수 호출 아래로는 진행이 잠시 정지되고 서브 쓰레드의 진행을 기다려주는 코드이다.

    # 이 설명을 못해서, 쓰레드가 갑자기 꺼지는 것을 막아주는 함수다 라고 설명하는 게 너무 공포...;;

    # 하..... 수준이 진짜...


import threading
import time

print("Main Thread Start")

def child_task(task_no):
    print("child Thread Start")
    time.sleep(1)
    print("Child Thread End")
    # time.sleep(1)

thread1 = threading.Thread(target=child_task, args=(1,))
thread1.start()

thread2 = threading.Thread(target=child_task, args=(2,))
thread2.start()
thread1.join()
thread2.join()
print("Main Thread End") 
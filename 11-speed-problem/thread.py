from threading import Thread
import requests
import time

many = 15

print("========Thread=========")
s = time.time()

result = [None] * many

def work(url, i):
    result[i] = requests.get(url)

if __name__ == '__main__':
    ths = []

    for i in range(many):
        ths.append( Thread(target=work, args=('https://my-json-server.typicode.com/sunday00/placeholders/metaVariables', i)) )
        ths[i].start()
        
    for i in range(many):
        ths[i].join()

print(result)
print( time.time() - s )

print("========Normal=========")
s = time.time()
result = [None] * many

def work(url, i):
    result[i] = requests.get(url)

for i in range(many): 
    work("https://my-json-server.typicode.com/sunday00/placeholders/metaVariables", i)

print(result)
print( time.time() - s )

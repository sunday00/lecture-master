import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

import os

print( os.system('ls') )

f = open('ex.txt', 'w')
f.write('hello world')

f.write('''
fjdskl
fjsdlk
fjdslk
''')

f.close()

f = open('ex.txt', 'r')
s = f.read()
f.close()

f = open('ex.txt', 'a')
f.write("!!!")
f.close()

f = open('ex.txt', 'r')
s = f.read()
f.close()

print(s)

f = open('ex.txt', 'r')

line = ' '
while line :
    line = f.readline()
    print(line)
f.close()

with open('ex.txt', 'a') as ff:
    ff.write('oh oh oh')

with open('ex.txt', 'r') as fr:
    print(fr.read())


 


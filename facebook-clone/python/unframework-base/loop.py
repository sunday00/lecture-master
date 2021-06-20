import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

l = [1, 2, 3, 10, 11, 18, 1990, 'apple', 'red']
t = (1, 2, 3, 10, 11, 18, 1990, 'apple', 'red')
s = {1, 2, 3, 10, 11, 18, 1990, 'apple', 'red'}
d = {'apple':'red', 'banana':'yellow', 'isReal':False, 'cost':900}

ld = [
    {'name':'foo', 'age':10},
    {'name':'bar', 'age':12},
    {'name':'baz', 'age':10}
]

for i in l:
    print(i)

for i in range(1, 10, 2):
    print(i)

for k, v in d.items():
    print(f'{k} : {v}')

def loop1 () :
    for i in range(1, 5):
        for j in range(1, 5):
            if j > 3:
                return
            print(j)
loop1()
# python은 label 기반 break 가 없다.
# 이렇게 함수 기반으로 return  하는 방식으로 바깥쪽 break를 할 수 있다
# 여러 제안이 제시 되었으나 reject 되면서 도입되지 못했다.
# 있는게 편할 거 같은데... 쩝...;;

# https://mail.python.org/pipermail/python-3000/2007-July/008663.html

# 거절 이유는 클린코드를 방해하고 코드를 복잡하게 만들기 때문이라고 설명한다.
# 생각해보면 여러 중첩 for를 하고 그 중에서 특정 inner loop 에서 중간 단계의 loop를
#  빠져나오게 하려면 label이 편하긴 하겠지만,
#  분명 나중에 읽는 사람이 괴롭긴 하겠다.
#  중간에 빠져나오는 코드를 짜려면 중간 loop를 함수 등으로 빼는 게 
#  정말 나을지도...;;

u.br()

l = [i for i in range(1, 10)]
print(l)


u.br()

twoNine = [i for i in range(2, 10)]
print(twoNine)

nested = [(i, j) for i in range(2,10) for j in range(2, 10)]
print(nested)

gugudan = [f'{i}X{j}={i*j}' for i in range(2,10) for j in range(2, 10)]
print(gugudan)

u.br()

nl = [[10]*3]*2
print(nl)

nl[0][0] = 11
print(nl)
# 리스트의 값을 * 로 만들면 각각의 원소를 복사하게 되나
# 리스트 자체를 복사하게되면 같은 주소를 바라보게된다.
# 주의

nl = [[10]*3 for i in range(2)]
print(nl)
nl[0][0] = 11
print(nl)
# range와 list completion 을 이용하면 주소를 복사하지 않는다.

u.br()

for i in []:
    print(i)
else :
    print('end iter with no break')

for i in [1,22]:
    print(i)
else :
    print('end iter with no break')
# 다른 언어의 for/else 구문이 아니다.
# 이건 함수가 break 없이 모두 마치고 그리고 나서 실행하는 구문이다.
# 제안에는 then 으로 추가하자는 의견이 있었으나
# 키워드가 또 추가되는 것을 꺼려하여 else가 되었다.

for i in [1,22]:
    if i == 22 :
        break
    print(i)
else :
    print('end iter with no break')
# 중간에 break가 있으면 실행 안되는 것에 주의


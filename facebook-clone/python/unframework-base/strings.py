s = 'My chicken is not arrived yet.'

print( dir(s) )

print( s[:4] )
print( s[::2] ) # skip 2times
print( s[::-1] ) #reverse

print( s.find('r') )
print( s.find('xxx') )
print( s.index('r') )
#사실상 index와 find 는 비슷한데 
# find는 없으면 -1을 index는 없으면 에러를 리턴한다.

print( s.count('r') )

nums = range(0, 10000)
print(nums[555])
numList = list(nums)
print(numList)
numStr = str(numList)
print(numStr)
print( numStr.count('8') )

print( '         .!        fsd        $%  '.strip(' .!$%'))
print( s.replace('chicken', 'cola') )

print('@'.join( ['aaa', 'bbb', 'ccc'] ))
print('@'.join( {'aaa', 'bbb', 'ccc'} )) # 순서를 보장하지 않음
print()

print(  '235423'.isalnum()  )

print( '423'.rjust(30) )
print( '423'.rjust(30, '0') ) #채우기 , 0으로 채우는 건 == .zfill(30)
print( '423'.center(30, '0') ) #채우기 # 모자란다고 잘라버리진 않음

rule = str.maketrans('ari', '@R!')
print( s.translate(rule) )


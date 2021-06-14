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

print( s + s )

br = """
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
============================================
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
"""

print(br)

print(s*3)


name = 'Robert'
quantity = 3
ss = '%s ordered %d cheese.' % (name, quantity)
print(ss)


ss = '{} ordered {} cheese.'.format(name, quantity)
print(ss)

ss = '{0} ordered {0} cheese.'.format(name, quantity)
print(ss)

ss = '{a} ordered {b} cheese.'.format(a='Lee', b=100)
print(ss)

ss = '{:10} ordered {:10} cheese.'.format(name, quantity)
print(ss)

ss = '{:<10} ordered {:<10} cheese.'.format(name, quantity)
print(ss)

ss = '{:>10} ordered {:>10} cheese.'.format(name, quantity)
print(ss)

ss = '{:^10} ordered {:^10} cheese.'.format(name, quantity)
print(ss)

ss = '{:!^10} ordered {:!^10} cheese.'.format(name, quantity)
print(ss)

ss = f'{name} ordered {quantity} cheese.'
print(ss)

ss = f'{name:!^10} ordered {quantity:!^10} cheese.'
print(ss)

print(br)

ss = '{:.10f}'.format(3.1)
print(ss)

ss = format(372164826487, ',')
print(ss)

ss = '{:,.5f}'.format(743222789.8923749823)
print(ss)
# 너무 심한 소수는 또 오작동 하므로 주의
#ex))
print('{:,.10f}'.format(5348723432423.4792836483276482))
                    #5,348,723,432,423.4794921875

print(br)

ss = '{:010}'.format(74)
print(ss)
ss = '{:010d}'.format(74)
print(ss)

ss = '{:110d}'.format(74)
print(ss)
ss = '{:210d}'.format(74)
print(ss)
# 이렇게하면 1(또는 2)을 10개 채우라는 건지 11(또는 21)을 0개 채우라는 건지...
# 응~ 둘다 아니고 빈칸 110(210)으로 채움

ss = '{:1>10}'.format(74)
print(ss)
ss = '{:2>10}'.format(74)
print(ss)
# 0말고 채우려면 이렇게

ss = '{:010.6f}'.format(74)
print(ss)
# 0으로 10자리 맞추되 소수점아래 숫자와 .자체를 포함하여 카운트

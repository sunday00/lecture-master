import re

result = re.match('p', 'python')
print( result.span() )

result = re.match('p', 'hello python powered popping Machine!')
print( result )

result = re.match('power', 'powered popping Machine!')
print( result.span() )

print("============ ============= =============")

result = re.search('p', 'python')
print( result.span() )

result = re.search('p', 'hello python powered popping Machine!')
print( result.span() )

result = re.search('power', 'powered popping Machine!')
print( result.span() )

print("============ ============= =============")

result = re.findall('p', 'python')
print( result )

result = re.findall('p', 'hello python powered popping Machine!')
print( result )

result = re.findall('power', 'powered popping Machine!')
print( result )

print("============ ============= =============")

result = re.finditer('p', 'python')
print( list(i.span() for i in result) )

result = re.finditer('p', 'hello python powered popping Machine!')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('p', 'hello python powered popping Machine!')
print( list(i.span() for i in result) )

result = re.finditer('power', 'powered popping Machine!')
print( list(i.span() for i in result) )

print("============ ============= =============")

result = re.finditer('k*oo', 'hellooooo?')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('k+oo', 'hellooooo?')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('k?oo', 'hellooooo?')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('lo*p', 'looooop?')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('lo+p', 'looooop?')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('lo?p', 'loooop?')
print( list(map(lambda i: i.span(), list(result))) )

print("============ ============= =============")

result = re.finditer('p((?![c])[a-z])n', 'pyn')
print( list(map(lambda i: i.span(), list(result))) )

result = re.finditer('p((?![c])[a-z])n', 'pcn')
print( list(map(lambda i: i.span(), list(result))) )

print("============ ============= =============")

regx = re.compile('p((?![c])[a-z])n')
result = re.finditer(regx, 'pyn')
print( list(map(lambda i: i.span(), list(result))) )

print("============ ============= =============")

result = re.sub('k*oo', 'MODIFIED','hellooooo?')
print( result )
 
result = re.split('\d{3}', 'Hoo789KAA')
print( result )

l = ['124', '124865', '010-6558-7788', '658-112', '7788-3655', 'sdf', 'hrt-72567', '01000*4562', '010445577881']


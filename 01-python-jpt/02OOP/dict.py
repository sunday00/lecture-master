d = { i : i + 1 for i in range(10) }

print(d)

dd = [ ('abc', i) for i in range(10) ]

print(dd)

l = []
def work(arg):
    l.append([arg[0], arg[1] ])
    print([arg[0], arg[1]])

map( work , [ ["abc", i + 1] for i in range(10) ] ) # not worked

print(l)
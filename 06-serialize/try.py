import pickle

l = [1, 2, 5, 7, 10]
d = pickle.dumps(l)
print(d)

print( pickle.loads(d) )

import json

dict1 = {
    'apple': ('red', 7),
    'banana': ('yellow', 4),
    'cherry': ('dark-red', 11),
    'durian': ('white', 4),
}

d2 = json.dumps(dict1)
d3 = json.dumps(l)

print(d2, type(d2))
print(d3, type(d3))

print( json.loads(d2) )
print( json.loads(d3) )
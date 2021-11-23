throw = 1
# raise Exception("NOT!")

try :
    1 / 0
except Exception as e:
    print(e)

assert 1 > 3, "NOT Correct"
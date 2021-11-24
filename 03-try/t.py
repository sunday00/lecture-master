throw = 1
# raise Exception("NOT!")

try :
    1 / 0
except Exception as e:
    print(e)

try:
    assert 1 > 3, "NOT Correct"
except Exception as e:
    print(e)


try :
    a = [1, 2, 3]
    print( a[4] )
except AssertionError as e:
    print("AssertionError: " + e)
except Exception as e:
    print("UncaughtError: {}".format(e))
else :
    print("fine")
finally:
    print("DONE")

class ForbbidenString (Exception):
    def __str__(self) :
        return "ForbbidenString"

try:
    #some code
    raise ForbbidenString
except Exception as e:
    print(e)

class ForbbidenString2 (Exception):
    def __init__(self, *args) :
        super().__init__("ForbbidenString2 : {}".format(args))

try:
    #some code
    raise ForbbidenString2("fuck")
except Exception as e:
    print(e)
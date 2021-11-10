def returning_any2 (i: list) -> set :
    if i == 0 :
        return 111
    elif i == 1 :
        return {1, 2, 3}
    else : 
        return "hello"

print( returning_any2(0) )
print( returning_any2(1) )
print( returning_any2(2) )
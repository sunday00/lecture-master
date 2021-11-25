with open("05-file/example.txt") as f:
    for line in f:
        print(line)

print( "is close? : {}".format( f.closed ) )

with open("05-file/lorem.txt") as f:
    print(f.read())

with open("05-file/lorem.txt") as f:
    print(f.readlines())

with open("05-file/lorem.txt") as f:
    print(f.readline())
    print(f.readline())
    print(f.readline())

with open("05-file/lorem.txt", 'a') as f:
    f.write("""
        NEW LINE IS COMMING
        NEW LINE IS COMMING
        NEW LINE IS COMMING
        NEW LINE IS COMMING
    """)

with open("05-file/lorem.txt", 'a') as f:
    s = """
        NEW LINE IS COMMING 1
        NEW LINE IS COMMING 2
        NEW LINE IS COMMING 3 
        NEW LINE IS COMMING 4
    """
    f.writelines(s)


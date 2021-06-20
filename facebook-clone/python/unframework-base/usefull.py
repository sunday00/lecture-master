def br():
    print("\n\n\n\n\n\n")
    print("============")
    print("\n\n\n\n\n\n")

class Console:
    def error (self, msg: str):
        print( f'\033[91m{msg}' )

console = Console()
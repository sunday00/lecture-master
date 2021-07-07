def log(msg: str, withHr = True) :
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[37m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def warn(msg: str):
  print(f"\033[33m{msg}\033[0m")
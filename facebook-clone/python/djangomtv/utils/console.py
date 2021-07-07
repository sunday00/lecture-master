def log(msg: str, withHr = True) :
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[37m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def warn(msg: str, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[33m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def info(msg: str, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[36m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def success(msg: str, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[32m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")      

def error(msg: str, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[31m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")      

def cute(msg: str, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[95m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def kv(key: str, msg: str, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
  print(f"\033[96m{key}\033[0m : \033[97m{msg}\033[0m")
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def loop(dic, name=None, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

  if name != None :
    print(f"\033[92m{name}\033[0m")
  else :
    print(f"\033[92m{type(dic)}\033[0m")
    
  for i, v in dic.items() :
    print(f"\033[96m{i}\033[0m : \033[97m{v}\033[0m")

  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

def loopArray(arr, name=None, withHr = True):
  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  

  if name != None :
    print(f"\033[92m{name}\033[0m")
  else :
    print(f"\033[92m{type(arr)}\033[0m")

  for i in range(len(arr)) :
    print(f"\033[96m{i}\033[0m : \033[97m{arr[i]}\033[0m")

  if withHr:
    print(f"\n\n\033[37m === === === === === \033[0m\n\n")  
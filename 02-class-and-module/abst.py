from abc import *

class Country (metaclass = ABCMeta):
  @abstractmethod
  def Local_greeting(self):
    pass


class Korea (Country):
  def Local_greeting(self):
    return "안녕하세요?"
  
korea = Korea()
print( korea.Local_greeting() )

print(  isinstance(korea, Korea)  )
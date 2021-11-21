from libs.jobs import *

class Painter(Job):
    pass
    
painter = Painter('KO')

print(painter.name)
painter._do_work()

class No_job :
    def do_work(self):
        Job._do_work(self)

noJob = No_job()
noJob.do_work()

class Plus:
    def plus_two(self, x, y):
        return x + y
    
class Minus:
    def minus_two(self, x, y):
        return x - y

class Simple_calc(Plus, Minus):
    def plus_and_minus(self, x, y, z):
        return x + y - z

simple_calc = Simple_calc()
print( simple_calc.plus_and_minus(4, 6, 3) )
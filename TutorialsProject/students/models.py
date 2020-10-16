from django.db import models

# Create your models here.
class Students(models.Model):
    name=models.CharField(max_length=100)
    major=models.CharField(max_length=100)
    age=models.IntegerField(default=0)
    grade=models.IntegerField(max_length=0)
    gender=models.CharField(max_length=20)

    def __str__(self):
        return self.name
        

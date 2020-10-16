from django.http import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
from .models import Students

# Create your views here.
def reg(request):
    return render(request, 'reg.html')

def store(request):
    Students(
        name = request.POST['name'],
        major = request.POST['major'],
        age = request.POST['age'],
        grade = request.POST['grade'],
        gender = request.POST['gender']
    ).save()
    return HttpResponseRedirect(reverse('students:lists'))

def lists(request):
    return render(
        request,
        'lists.html',
        {
            'student_lists' : Students.objects.all() 
        }
    )

from django.shortcuts import render

# Create your views here.
def subIndex(req):
    return render (req, 'sub-index.html')

def globalTemplate(req):
    return render (req, 'globalTemplate.html')
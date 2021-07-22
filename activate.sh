#!/bin/bash -x
PWD=`pwd`

echo $PWD
activate () {
    # . $PWD/facebook-clone/python/django-crash/bin/activate
    . $PWD/facebook-clone/backend/facebook/bin/activate
    cd facebook-clone/backend
    ls
}

activate

echo "




===============
if not activated,

test and learn
source facebook-clone/python/django-crash/bin/activate

facebook clone pratice
source facebook-clone/backend/facebook/bin/activate

===========

disable : deactivate

===========

check current folder is now $PWD
"

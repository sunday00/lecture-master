git init

git remote add origin https://github.com/sunday00/lecture-master.git

git checkout -b lecName

git aa

git c "re upload"

git push -u origin lecName

-------

git checkout lec-current-focus

git pull origin [lec branch name] --allow-unrelated-histories --ff

git aa

git commit -m 'overwrite before lecture'

git push

-------

ps-db:

winter is java

summer is php

autumn is python

blueorange is js

whiteorange is etc

-------

git tag -a <lectureName> -m <description>
git push origin <lectureName>

------

git checkout master
git merge <lectureName>  --allow-unrelated-histories
git aa
git commit -m 'new lecture start'
git p --force

-------



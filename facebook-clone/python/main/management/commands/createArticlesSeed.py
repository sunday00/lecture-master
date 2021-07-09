from random import randint
from django_seed import Seed 
from django.core.management.base import BaseCommand 
from main.models import Article

class Command(BaseCommand): 
  help = 'This command creates articles' 
  
  def add_arguments(self, parser): 
    parser.add_argument(
      '--number', default=1, type=int, help="How many articles do you want to create?" 
    )

  def handle(self, *args, **options): 
    number = options.get('number') 
    seeder = Seed.seeder() 

    # https://github.com/mstdokumaci/django-seed/blob/master/django_seed/guessers.py      
      # guess_format or FieldTypeGuesser
      # https://faker.readthedocs.io/en/master/providers/baseprovider.html
        
    seeder.add_entity(Article, number,{
      'title': lambda x: seeder.faker.sentence(),
      'contents': lambda x: seeder.faker.text(),
      'likeCnt': lambda x: seeder.faker.randomize_nb_elements(min=0, max=200),
      'viewCnt': lambda x: randint(0, 200),
    }) 
    seeder.execute() 
    self.stdout.write(
      self.style.SUCCESS(f'{number} articles created!')
    )
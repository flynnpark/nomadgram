from django.db import models

class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True) # inital only
    updated_at = models.DateTimeField(auto_now=True) # refresh

    class Meta: # Extra information of class
        abstract = True # This class is abstract base class


class Image(TimeStampedModel):

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()


class Commant(TimeStampedModel):

    message = models.TextField()

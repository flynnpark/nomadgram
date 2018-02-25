from django.db import models
from taggit.managers import TaggableManager
from nomadgram.users import models as user_models
from django.contrib.humanize.templatetags.humanize import naturaltime

class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True) # inital only
    updated_at = models.DateTimeField(auto_now=True) # refresh

    class Meta: # Extra information of class
        abstract = True # This class is abstract base class


class Image(TimeStampedModel):

    """ Image Model """

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True, related_name='images')
    tags = TaggableManager()

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return naturaltime(self.created_at);

    @property
    def is_vertical(self):
        if self.file.width < self.file.height:
            return True
        else:
            return False

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)

    class Meta:
        ordering = ['-created_at']


class Comment(TimeStampedModel):

    """ Comment model """

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True, related_name='comments')

    def __str__(self):
        return self.message


class Like(TimeStampedModel):

    """ Like Model """

    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True, related_name='likes')

    def __str__(self):
        return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)

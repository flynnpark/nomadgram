from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class User(AbstractUser):

    """ User Model """

    GENDER_CHOICE = (
        ('male', 'Male'),
        ('femail', 'Female'),
        ('not-specified', 'Not specified')
    )

    # First Name and Last Name do not cover name patterns
    # around the globe.
    profile_image = models.ImageField(null=True)
    name = models.CharField(_('Name of User'), blank=True, max_length=255)
    website = models.URLField(null=True)
    bio = models.TextField(null=True)
    phone = models.CharField(max_length=32, null=True)
    gender = models.CharField(max_length=32, choices=GENDER_CHOICE, null=True)
    followers = models.ManyToManyField("self", blank=True)
    following = models.ManyToManyField("self", blank=True)

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})

from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.Feed.as_view(), name='feed'),
]

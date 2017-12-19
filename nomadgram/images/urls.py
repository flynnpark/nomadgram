from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/$', views.ListAllImages.as_view(), name='all_images'),
    url(r'^comments/$', views.ListAllComments.as_view(), name='all_comments'),
    url(r'^likes/$', views.ListAllLikes.as_view(), name='all_likes'),
]

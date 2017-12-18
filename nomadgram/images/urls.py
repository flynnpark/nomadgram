from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all/$', views.ListAllImages.as_view(), name='all_images'),
]

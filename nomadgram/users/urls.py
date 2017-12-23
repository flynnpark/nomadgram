from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^explore$', views.ExploreUsers.as_view(), name='list'),
]

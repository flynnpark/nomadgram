from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^explore$', views.ExploreUsers.as_view(), name='list'),
    url(r'^(?P<user_id>[0-9]+)/follow/$', views.FollowUser.as_view(), name='follow_user'),
]

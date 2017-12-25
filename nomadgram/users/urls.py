from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^explore$', views.ExploreUsers.as_view(), name='list'),
    url(r'^(?P<user_id>[0-9]+)/follow/$', views.FollowUser.as_view(), name='follow_user'),
    url(r'^(?P<user_id>[0-9]+)/unfollow/$', views.UnFollowUser.as_view(), name='unfollow_user'),
    url(r'^(?P<username>\w+)/$', views.UserProfile.as_view(), name='user_profile'),
    url(r'^(?P<username>\w+)/followers/$', views.UserFollowers.as_view(), name='user_followers'),
    url(r'^(?P<username>\w+)/following/$', views.UserFollowing.as_view(), name='user_following'),
]

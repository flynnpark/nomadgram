from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.Feed.as_view(), name='feed'),
    url(r'^(?P<image_id>[0-9]+)/$', views.ImageDetail.as_view(), name='image_detail'),
    url(r'^(?P<image_id>[0-9]+)/likes/$', views.LikeImage.as_view(), name='like_image'),
    url(r'^(?P<image_id>[0-9]+)/unlikes/$', views.UnLikeImage.as_view(), name='like_image'),
    url(r'^(?P<image_id>[0-9]+)/comments/$', views.CommentOnImage.as_view(), name='comment_image'),
    url(r'^(?P<image_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$', views.ModerateComment.as_view(), name='comment_image'),
    url(r'^comments/(?P<comment_id>[0-9]+)/$', views.Comment.as_view(), name='comment'),
    url(r'^search/$', views.Search.as_view(), name='search'),
]

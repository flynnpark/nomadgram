from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.Notifications.as_view(), name='notifications'),
]

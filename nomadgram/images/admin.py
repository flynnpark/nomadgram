from django.contrib import admin
from . import models

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Comment)
class CommentAdin(admin.ModelAdmin):
    pass

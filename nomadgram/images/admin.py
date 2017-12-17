from django.contrib import admin
from . import models

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    list_display_links = (
        'caption',
    )

    search_fields = (
        'caption',
        'location',
    )

    list_filter = (
        'location',
        'creator'
    )

    list_display = (
        'file',
        'caption',
        'location',
        'creator',
        'created_at',
        'updated_at',
    )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'image',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdin(admin.ModelAdmin):

    list_display = (
        'message',
        'creator',
        'image',
        'created_at',
        'updated_at',
    )

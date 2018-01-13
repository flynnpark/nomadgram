from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'nomadgram.users'
    verbose_name = "Users"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """

        from .signals import user_signed_up

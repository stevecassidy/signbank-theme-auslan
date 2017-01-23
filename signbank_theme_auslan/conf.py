from django.conf import settings  # noqa

from appconf import AppConf


class ThemeAppConf(AppConf):

    ADMIN_URL = "admin:index"
    CONTACT_EMAIL = "steve.cassidy@mq.edu.au"

    class Meta:
        prefix = "theme"

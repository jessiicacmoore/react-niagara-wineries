from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('pins', PinViewSet, base_name="pins")
router.register('register', CreateUserView, base_name="register")

urlpatterns = router.urls
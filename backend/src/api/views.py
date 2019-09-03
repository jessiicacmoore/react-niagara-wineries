from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import mixins, permissions, viewsets

from .models import *
from .serializers import *


class PinViewSet(viewsets.ModelViewSet):
    serializer_class = PinSerializer

    def get_queryset(self):
        return self.request.user.pins.all()

class CreateUserView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()
    

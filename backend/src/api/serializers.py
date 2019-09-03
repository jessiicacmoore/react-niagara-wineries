from django.contrib.auth.models import User
from rest_framework import serializers
from models import *


class WinerySerializer(serializers.ModelSerializer):
        
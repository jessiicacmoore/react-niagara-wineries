from django.db import models
from django.contrib.auth.models import User

class Winery(models.Model):
	name = models.CharField(max_length=200)
	image_ref = models.URLField(max_length=200)
	yelp_id = models.CharField(max_length=200)
	address = models.CharField(max_length=200)
	city = models.CharField(max_length=200)

	def __str__(self):
		return self.name

	def __repr__(self):
		return self.name
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


class Pin(models.Model):
	user = models.ForeignKey(User, related_name="pins", on_delete=models.CASCADE)
	winery = models.ForeignKey(Winery, related_name="pins", on_delete=models.CASCADE)
	visited = models.BooleanField(default=False)

	class Meta:
		unique_together = ('user', 'winery')

	def __str__(self):
		return f"{self.user} - {self.winery}"

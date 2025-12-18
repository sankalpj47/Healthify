from django.db import models


class User(models.Model):
    # Django automatically adds: id = models.AutoField(primary_key=True)

    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    hashed_password = models.CharField(max_length=100)
    salt = models.CharField(max_length=100)

    reset_token = models.CharField(max_length=100, blank=True, default="")
    reset_token_expires = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

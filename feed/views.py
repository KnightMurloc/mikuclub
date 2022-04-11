import json

from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render

# Create your views here.
from accounts.models import CustomUser
from feed.Forms import PostForm
from feed.models import Post


def make_post(request):
    current_user = request.user
    if request.method == "POST" and current_user.is_authenticated:
        form = PostForm(request.POST)

        if form.is_valid():
            post = Post()
            post.user = current_user
            post.text = form.cleaned_data['text']
            post.save()

    return HttpResponseRedirect("/")


def get_post(request):
    current_user = request.user
    print(current_user)
    if request.method == "GET" and current_user.is_authenticated:
        print(request.GET.get("time"))
        # posts_raw =

        posts = []
        for post_raw in Post.objects.order_by("post_time")[:10].values():
            # print()
            user = CustomUser.objects.get(pk=post_raw["user_id"])
            post = {
                "username": user.username,
                "avatar": str(user.avatar),
                "text": post_raw['text'],
                "post_time": post_raw['post_time']
            }
            posts.append(post)

        print(posts)
        return JsonResponse(posts, safe=False)

    return HttpResponse("", 200)

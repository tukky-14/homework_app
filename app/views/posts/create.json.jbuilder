json.user_name @post.user.nickname
json.created_at @post.created_at.strftime("%Y/%m/%d %H:%M")
json.text @post.text
json.id @post.id
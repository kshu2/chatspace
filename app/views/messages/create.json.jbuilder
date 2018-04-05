json.content  @message.content
json.id  @message.id
json.user_name  @message.user.name
json.image  @message.image.url
json.date @message.created_at.strftime("%Y年%m月%d日 %H時%M分")

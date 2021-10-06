# DARK32

静态博客

> 配置

1. 配置帖子

可以看到一下内容打开 /posts/posts.json

```json
{
    "top":[
        {"title": "Hello World", "describe": "Hello World", "id":"HELLOWORLD", "date":[2021,10,6,13,42]}
    ],
    "default":[
    ]
}
```

其中
+ top 里的为顶置帖子
+ default 就跟名字一样默认的 (配置格式与 top 的一样)
```json
{"title": "Hello World", "describe": "Hello World", "id":"HELLOWORLD", "date":[2021,10,6,13,42]}
````
+ title 帖子名称
+ describe 帖子描述
+ id [MarkDwon](https://www.runoob.com/markdown/md-tutorial.html) 文件地址(填文件名并将文件放入/posts/文件夹里,不要写扩展名(.md))
    例子：
        ```json
        {"title": "Hello World", "describe": "Hello World", "id":"HELLOWORLD", "date":[2021,10,6,13,42]}
        ```
        其中 HELLOWORLD 指的就是 /posts/HELLOWORLD.md
+ date 时间 (格式 [年, 月, 日, 时, 分])

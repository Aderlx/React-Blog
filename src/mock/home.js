const Mock = require('mockjs')

//get请求
module.exports = Mock.mock('/profile', 'get', (options) => {
    const ret = Mock.mock({
        'avatar_url': "https://th.bing.com/th/id/R.bd3de372c895030252938054372ef742?rik=od2WZPfZq8E89w&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190626%2f7af6aa2e8eaa4671a21a5872be093198.jpeg&ehk=PuVoQGy0KNQCWscEZj%2foH1WG%2byKtxeP0UHC%2f8ijBv70%3d&risl=&pid=ImgRaw&r=0",
        'article_count':10,
        'tag_count':10,
        'category_count':10,
        'github':"https://github.com/aderlx",
        'email':"aderlx@outlook.com",
        'paragraph':"世上无难事,只要肯放弃"
    })
    return {
        status:200,
        data:ret
    }
})



//get请求
module.exports = Mock.mock('/blogs', 'get', (options) => {
    const ret = Mock.mock(
     [
         {
             "title":"Title"

         },
         {
            "title":"Title2222"

        },
     ]
    )
    return {
        status:200,
        data:ret
    }
})


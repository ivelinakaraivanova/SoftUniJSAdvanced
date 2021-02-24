function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`

        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if (this.comments.length === 0) {
                return super.toString() + `\n` + `Rating: ${this.likes - this.dislikes}`
            } else {
                const allComments = this.comments.map(e => ` * ${e}`).join('\n')
                return super.toString() + `\n` + `Rating: ${this.likes - this.dislikes}\nComments:` + `\n` + allComments;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;

        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const po = solve();

let post = new po.Post("Post", "Content");
console.log(post.toString());

let scm = new po.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());

let bp = new po.BlogPost('Blog', 'Blog content', 200);
bp.view().view();
console.log(bp.toString())

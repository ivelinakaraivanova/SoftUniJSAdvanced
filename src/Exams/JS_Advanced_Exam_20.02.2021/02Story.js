class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length-1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        }
        if (this.creator == username) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        }

        this._likes = this._likes.filter(e => e != username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const comment = { id, username, content };
        if (id === undefined || (!this._comments.some(comment => comment.id == id))) {
            id = this._comments.length + 1;
            this._comments.push({ id, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        }

        if (this._comments.some(comment => comment.id == id)) {
            const comment = this._comments.filter(comment => comment.id == id)[0];
            const replyId = id.toString().concat(`.${comment.replies.length + 1}`);
            comment.replies.push({ id: replyId, username, content});
            return `You replied successfully`;
        }
    }

    sortingArray(arr, sortingType) {
        if (sortingType == 'asc') {
            return arr.sort((a, b) => a.id.toString().localeCompare(b.id.toString()));
        }
        if (sortingType == 'desc') {
            return arr.sort((a, b) => b.id.toString().localeCompare(a.id.toString()));
        }
        if (sortingType == 'username') {
            return arr.sort((a,b) => a.username.localeCompare(b.username));
        }
    }


    toString(sortingType) {
        
        const resultArr = [];
                
        resultArr.push(`Title: ${this.title}`);
        resultArr.push(`Creator: ${this.creator}`);
        resultArr.push(`Likes: ${this._likes.length}`);
        resultArr.push(`Comments:`);

        for (const comment of this.sortingArray(this._comments, sortingType)) {
            resultArr.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            if (Object.keys(comment).length !== 0) {
                for (const reply of this.sortingArray(comment.replies, sortingType)) {
                    resultArr.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
                }
            }
        }
        
        return resultArr.join('\n');
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

const loadCommentsBtnElement = document.getElementById("load-comments-btn");
const commentSectionElement = document.getElementById("comments");

function createCommentsList(comments) {
    const commentListsElement = document.createElement("ol");

    for (const comment of comments) {
        const commentElement = document.createElement("li");
        commentElement.innerHTML = `
        <article class="comment-item">
            <h2>${comment.title}</h2>
            <p>${comment.text}</p>
        </article>
        `;
        commentListsElement.appendChild(commentElement);
    }

    return commentListsElement;
}

async function fetchCommentsForPosts() {
    const postId = loadCommentsBtnElement.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json();

    const commentsListElement = createCommentsList(responseData);
    commentSectionElement.innerHTML = "";
    commentSectionElement.appendChild(commentsListElement);
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPosts);

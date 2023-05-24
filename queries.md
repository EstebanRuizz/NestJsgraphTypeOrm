# Write your query or mutation here
{
  posts {
    title
    author {
      name
    }
  }
}

mutation {
  createPost(postInput: {
    title: "My third Post"
		content: "This is my third Post "    
    authorId: 2
  }) {
    id
    title
    content
    authorId
  }
} 

# Write your query or mutation here
{
  post(id: 2) {
    id
    title
    content
  }
}

{
  authors {
    id
    name
  }
}

mutation {
  createAuthor(createAuthorInput: {
    name: " ana"
  }){
    id
    name
  }
}
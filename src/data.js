let data = [
  {
    comment_id: '1',
    user: 'Namrata Saun',
    comment: 'yo',
    likes: 0,
    hasLiked: true,
    children: [
      {
        comment_id: '13',
        user: 'John',
        comment: 'not so yo',
        likes: 0,
        hasLiked: true,
        children: [
          { comment_id: '23', user: 'Jane', comment: 'testing', likes: 0, hasLiked: true },
          { comment_id: '42', user: 'hen', comment: 'where the eggs', likes: 0, hasLiked: true },
        ],
      },
    ],
  },
];

export default data;

import React from "react";
import Comments from "./Comments";

const commentsData = [
  {
    name: "Andy",
    text: "Morbi efficitur gravida massa sed maximus.",
    replies: [],
  },
  {
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Andy",
        text: "Morbi eu risus ut metus lacinia mollis",
        replies: [
          {
            name: "Anna",
            text: "Morbi efficitur gravida massa sed maximus",
            replies: [
              {
                name: "Kevin",
                text: "Maecenas a nulla a arcu fermentum accumsan",
                replies: [
                  {
                    name: "Mark",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Billy",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [],
          },
          {
            name: "Thomas",
            text: "Morbi eu risus ut metus lacinia mollis",
            replies: [
              {
                name: "Paul",
                text: "Proin commodo odio eget orci elementum, non aliquam est mollis",
                replies: [
                  {
                    name: "Kevin",
                    text: "Maecenas a nulla a arcu fermentum accumsan",
                    replies: [
                      {
                        name: "Gary",
                        text: "Proin commodo odio eget",
                        replies: [
                          {
                            name: "Martin",
                            text: "Morbi efficitur gravida massa sed maximus",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Martin",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "Joseph",
    text: "Morbi eu risus ut metus lacinia mollis",
    replies: [],
  },
  {
    name: "Billy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Kevin",
        text: "Maecenas a nulla a arcu fermentum accumsan",
        replies: [
          {
            name: "Gary",
            text: "Proin commodo odio eget",
            replies: [
              {
                name: "Martin",
                text: "Morbi efficitur gravida massa sed maximus",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Justin",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "Thomas",
    text: "Morbi eu risus ut metus lacinia mollis",
    replies: [
      {
        name: "Lea",
        text: "Nam quis mauris quis massa interdum dictum non et augue",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold mb-2">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

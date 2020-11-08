export interface Post {
  postId: string;
  title: string;
  text: string;
  link?: string;
  authorUid: string;
  createdAt: number;
  likeCount: number;
  likedUserIds: string[];
}

export type AnnouncementsType = {
  body: string;
  createdAt: string;
  id?: number;
  title: string;
  updatedAt?: string;
  userId?: number;
};
export type UserType = {
  age: number;
  email: string;
  firstname: string;
  id?: number;
  lastname: string;
  password: string;
  avatar?: string | null;
  cpassword?: string;
};

export type CommentsType = {
  body: string;
  createdAt: string;
  id: number;
  postId: number;
  updatedAt: string;
  userId: number;
  user?: Array<UserType>;
};
export type PostsType = {
  body: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt?: string;
  user: Array<UserType>;
  userId: number;
};


export type AuthorizeUserType = {
  accessToken: string;
  user: UserType
};

export type SagaParams = { payload: any; type: string };
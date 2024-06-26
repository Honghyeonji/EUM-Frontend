import { FinalResponse } from "./common-type";

export type RequestPostingProps = {
  title: string;
  content: string;
  startDate: string;
  location: string;
  volunteerTime: number;
  maxNumOfPeople: number;
  categoryId: number;
};

export type ResponsePostingProps = FinalResponse<PostType>;

export type UserCurrentStatus = {
  isWriter: boolean;
  isApplicant: boolean;
  applyStatus: string;
};

export type WriterInfo = {
  profileId: number;
  nickName: string;
  profileImage: string;
  address: string;
  gender: string;
  ageRange: number;
  userId: number;
};

export type StatusType =
  | "RECRUITING"
  | "RECRUITMENT_COMPLETED"
  | "TRANSACTION_COMPLETED";

export type PostType = {
  postId: number;
  title: string;
  content: string;
  createdDate: string;
  status: StatusType;
  startDate: string;
  location: string;
  pay: number;
  volunteerTime: number;
  currentApplicant: number;
  maxNumOfPeople: number;
  dealId: number;
  viewsCount: number;
  writerInfo: WriterInfo;
  deleted: boolean;
  categoryId: number;
};

export type ResponsePostDetail = FinalResponse<PostDetailType>;

export type UserCurrentStatusType = {
  report: boolean;
  writer: boolean;
  applicant: boolean;
  applyId: number;
  applyStatus: string;
};

export type PostDetailType = {
  writerInfo: WriterInfo;
  userCurrentStatus: UserCurrentStatusType;
  marketPostResponse: PostType;
};

export type ResponsePostListProps = FinalResponse<PostType[]>;

export type PostListPageable = {
  page: number;
  size: number;
  search?: string;
  category?: number;
};

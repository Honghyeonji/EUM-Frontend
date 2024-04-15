import axios, { AxiosResponse } from "axios";

import Instance from "./axios-instance";
import {
  ChatFinalResponse,
  ChatListItemType,
  ChatListResponse,
  ChatMakeRequest,
  ChatMemberResponse,
  ChatRoomResponse,
  ChatSendResponse,
} from "./types/chat-type";

export default class ChatApi {
  static async sendChatMessages({
    roomIdx,
    senderName,
    senderUuid,
    message,
  }: ChatSendResponse): Promise<ChatSendResponse> {
    const response: AxiosResponse<ChatSendResponse> = await Instance.post(
      `/chat/room/${roomIdx}/messages`,
      {
        roomIdx: roomIdx,
        senderName: senderName,
        senderUuid: senderUuid,
        message: message,
      },
    );
    return response.data;
  }

  static async getChatList() {
    const response = await axios.get(
      `${process.env.REACT_APP_CHAT_API_BASE_URL}:${process.env.REACT_APP_CHAT_API_PORT}/api/chats`,
      {
        headers: {
          userId: "2",
          Authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    console.log(response);
    if (response) {
      const temp = response.data as ChatListResponse;
      return temp.result;
    } else {
      throw new Error("Invalid response from server");
    }
  }

  static async getChatRoomData(chatRoomId: string) {
    const response = await axios.get(
      `${process.env.REACT_APP_CHAT_API_BASE_URL}:${process.env.REACT_APP_CHAT_API_PORT}/api/chats/${chatRoomId}`,
      {
        headers: {
          userId: "2",
          Authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    // console.log(response);
    if (response) {
      const temp = response.data as ChatRoomResponse;
      return temp.result;
    } else {
      throw new Error("Invalid response from server");
    }
  }

  static async getChatMembers(chatRoomId: string) {
    const response = await axios.get(
      `${process.env.REACT_APP_CHAT_API_BASE_URL}:${process.env.REACT_APP_CHAT_API_PORT}/api/chats/${chatRoomId}/members`,
      {
        headers: {
          userId: "2",
          Authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    // console.log(response);
    if (response) {
      const temp = response.data as ChatMemberResponse;
      return temp.result.userIds;
    } else {
      throw new Error("Invalid response from server");
    }
  }

  static async postChatMake(data: ChatMakeRequest) {
    const myId = localStorage.getItem("userId")
      ? localStorage.getItem("userId")
      : "-1";
    const response = await axios.post(
      `${process.env.REACT_APP_CHAT_API_BASE_URL}:${process.env.REACT_APP_CHAT_API_PORT}/api/chats`,
      data,
      {
        headers: {
          userId: myId,
          Authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    // console.log(response);
    if (response) {
      const temp = response.data as ChatFinalResponse<ChatListItemType>;
      return temp.result;
    } else {
      throw new Error("Invalid response from server");
    }
  }
}

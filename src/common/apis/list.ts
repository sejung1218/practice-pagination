import axios from 'axios';
import { useQuery } from 'react-query';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpeWFiOTNAZ21haWwuY29tIiwiaWF0IjoxNjc5OTcwODU3LCJleHAiOjE2ODA1NzU2NTcsImlzcyI6ImxlYXJuaW5nQ29kZSIsIm5hbWUiOiJpeWFiOTNAZ21haWwuY29tIn0.pxhN8z08xkbkB-Pd_hm9oJmG6ApD1IeNxSHl8hRezu5fPWmI9r0L4zDzebX4IjzI7XM3LxFhxH096ooSluRnZA';

// [유저] 공지사항 및 자료실 전체 리스트 API
export const getUserPostList = ({
  postType,
  courseSeq,
  page,
  elementCnt,
}: {
  postType: string;
  courseSeq: number;
  page: number;
  elementCnt: number;
}) => {
  return useQuery(
    ['postListData', { postType, courseSeq, page, elementCnt }],
    async () => {
      const response = await axios.get(
        `https://lcsocketdev.bonobono.dev/api/v1/post`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { postType, page, courseSeq, elementCnt },
        }
      );
      return response.data;
    }
  );
};

// [유저] 공지사항 및 자료실 상세 보기 API
export const getUserPostDetail = ({ postSeq }: { postSeq: number | null }) => {
  return useQuery(
    ['postDetailData', { postSeq }],
    async () => {
      const response = await axios.get(`/post/${postSeq}`, {
        params: { postSeq },
      });
      return response.data;
    },
    {
      enabled: postSeq !== null && postSeq !== undefined, // postSeq가 null이나 undefined가 아닐 때만 API 호출
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 리패치 방지
    }
  );
};

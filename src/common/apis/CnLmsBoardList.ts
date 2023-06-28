import axios from 'axios';
import { useQuery } from 'react-query';

// TODO : 충남 LMS 플랫폼에서 post api의 page 확인할것.

// [유저] 공지사항 및 자료실 전체 리스트 API
export const getUserCnLmsPostList = ({
  boardType,
  page,
  elementCnt,
}: {
  boardType: string;
  page: number;
  elementCnt?: number;
}) => {
  return useQuery(
    ['postListData', { boardType, page, elementCnt }],
    async () => {
      const response = await axios.get(`https://api.bonobono.dev/api/v1/post`, {
        // headers: { Authorization: `Bearer ${accessToken}` },
        params: { boardType, page, elementCnt },
      });
      return response.data;
    }
  );
};

// [유저] 공지사항 및 자료실 상세 보기 API
export const getUserPostDetail = ({ postSeq }: { postSeq: number | null }) => {
  return useQuery(
    ['postDetailData', { postSeq }],
    async () => {
      const response = await axios.get(
        `https://lcapidev.bonobono.dev/api/v1/post/${postSeq}`,
        {
          params: { postSeq },
        }
      );
      return response.data;
    },
    {
      enabled: postSeq !== null && postSeq !== undefined, // postSeq가 null이나 undefined가 아닐 때만 API 호출
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 리패치 방지
    }
  );
};

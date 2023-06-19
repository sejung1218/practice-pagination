import axios from 'axios';
import { useQuery } from 'react-query';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkbHRwd2pkMDExOEBnbWFpbC5jb20iLCJpYXQiOjE2ODY3MDMwMDQsImV4cCI6MTY4NzMwNzgwNCwiaXNzIjoibGVhcm5pbmdDb2RlIiwibmFtZSI6ImRsdHB3amQwMTE4QGdtYWlsLmNvbSJ9._du_F-cGRsVp0OuZFYMTWTBYEOPdVgNUdD6ewdCRlXLOMERrjve07VC1wx6REuJjSaxVCu_mhOmRfDKGDX8-Iw';

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
  elementCnt?: number;
}) => {
  return useQuery(
    ['postListData', { postType, courseSeq, page, elementCnt }],
    async () => {
      const response = await axios.get(
        `https://lcapidev.bonobono.dev/api/v1/post`,
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

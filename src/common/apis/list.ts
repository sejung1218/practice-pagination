import { useQuery } from 'react-query';
import { GET } from '@common/httpClient';
import { PaginationResult } from '@/type/fetch';
import { PostDetailResponseDto, PostResponseDto } from '@common/Api';

// [유저] 공지사항 및 자료실 전체 리스트 API
export const getUserPostList = async ({
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
      const response = await axios.get(`/post`, {
        params: { postType, page, courseSeq, elementCnt },
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
      const response = await GET(`/post/${postSeq}`, {
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

//챗봇 전용
export function getChatRoomFaqList() {
  return GET<{ data: PaginationResult<PostResponseDto[]> }>(`/post`, {
    params: { page: 1, postType: 'TYPE_FAQ', courseSeq: 0, elementCnt: 20 },
  });
}

//챗봇 전용
export function getChatRoomFaqDetail(postSeq: number) {
  return GET<{ data: PostDetailResponseDto }>(`/post/${postSeq}`);
}

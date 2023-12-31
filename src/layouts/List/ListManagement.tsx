import { CustomTable } from '@/components/ui/CustomTable';
import { useState } from 'react';
import { HeadRow } from '@/components/ui/CustomTable/CustomTable';
import * as customTableStyle from '@/components/ui/CustomTable/customTableStyle';
import { getUserPostList } from '@/common/apis/list';

// TODO : KDT 서버 종료 및 토큰 기간 만료로 에러 발생. CN LMS 게시판으로 변경 필요
// TODO : CN LMS 고도화 작업 시작. 보류.

const headRows: HeadRow[] = [
  { name: 'No', align: 'center', width: '5%', value: 'seq' },
  { name: '제목', align: 'center', width: '45%', value: 'subject' },
  { name: '등록자', align: 'center', width: '20%', value: 'user.nickName' },
  { name: '작성일', align: 'center', width: '10%', value: 'createdDtime' },
  { name: '수정일', align: 'center', width: '10%', value: 'modifiedDtime' },
  { name: '공지여부', align: 'center', width: '10%', value: 'noticeYn' },
];
export function ListManagement() {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // 공지사항 전체 리스트 API
  const {
    data: postListData,
    isLoading: postListIsLoading,
    error: postListError,
  } = getUserPostList({
    postType: 'TYPE_NOTICE',
    courseSeq: 0,
    page: page,
    // elementCnt: 10,
  });
  const postListDataContent = postListData?.data.content;

  // console.log('postListData : ', postListData);
  // console.log('postListDataContent : ', postListData?.data.content);
  // console.log('페이지는 : ', page);
  // console.log('토탈엘리먼츠 : ', postListData?.data.totalElements);
  // console.log('토탈페이지는 : ', postListData?.data.totalPages);

  if (postListIsLoading) {
    return (
      <customTableStyle.ManagementContainer>
        Loading...
      </customTableStyle.ManagementContainer>
    );
  }
  if (postListError) {
    return (
      <customTableStyle.ManagementContainer>
        Error...
      </customTableStyle.ManagementContainer>
    );
  }
  return (
    <customTableStyle.ManagementContainer>
      <CustomTable
        adminCenterTitleKr={'공지사항'}
        adminCenterTitleEng={'notice'}
        headRows={headRows}
        data={postListDataContent}
        count={postListData.data.totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </customTableStyle.ManagementContainer>
  );
}

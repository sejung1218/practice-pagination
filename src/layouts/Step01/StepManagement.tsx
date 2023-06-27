import { getUserCnLmsPostList } from '@/common/apis/CnLmsBoardList';
import { HeadRow } from '@/components/ui/CustomTable/CustomTable';
import { useState } from 'react';
import { CustomTable } from '@/components/ui/CustomTable';
import * as customTableStyle from '@/components/ui/CustomTable/customTableStyle';

const headRows: HeadRow[] = [
  { name: 'No', align: 'center', width: '5%', value: 'seq' },
  { name: '제목', align: 'center', width: '45%', value: 'subject' },
  { name: '등록자', align: 'center', width: '20%', value: 'user.nickName' },
  { name: '작성일', align: 'center', width: '10%', value: 'createdDtime' },
  { name: '수정일', align: 'center', width: '10%', value: 'modifiedDtime' },
  { name: '공지여부', align: 'center', width: '10%', value: 'noticeYn' },
];

export function StepManagement() {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // 공지사항 전체 리스트 API
  const {
    data: postListData,
    isLoading: postListIsLoading,
    error: postListError,
  } = getUserCnLmsPostList({
    boardType: 'TYPE_NOTICE',
    page: page,
    // elementCnt: 10,
  });
  const postListDataContent = postListData?.data.content;

  console.log('데이터 : ', postListDataContent);
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
    // <customTableStyle.ManagementContainer>
    //   <CustomTable
    //     adminCenterTitleKr={'공지사항'}
    //     adminCenterTitleEng={'notice'}
    //     headRows={headRows}
    //     data={postListDataContent}
    //     count={postListData.data.totalPages}
    //     page={page}
    //     onPageChange={handlePageChange}
    //   />
    // </customTableStyle.ManagementContainer>
    <div>테이블 수정중</div>
  );
}

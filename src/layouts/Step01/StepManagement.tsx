import { getUserCnLmsPostList } from '@/common/apis/CnLmsBoardList';
import { HeadRow } from '@/components/ui/CustomTable/CustomTable';
import { useState } from 'react';
import { CustomTable2 } from '@/components/ui/CustomTable2';
import * as customTableStyle2 from '@/components/ui/CustomTable2/customTableStyle2';

// #TODO : Board UI Check

const headRows: HeadRow[] = [
  { name: 'No', align: 'center', width: '5%', value: 'seq' },
  { name: '제목', align: 'center', width: '20%', value: 'subject' },
  { name: '본문', align: 'center', width: '45%', value: 'content' },
  { name: '작성일', align: 'center', width: '10%', value: 'createdDtime' },
  { name: '수정일', align: 'center', width: '10%', value: 'modifiedDtime' },
  { name: '공지여부', align: 'center', width: '10%', value: 'noticeYn' },
];

export function StepManagement() {
  const [page, setPage] = useState<number>(0);
  // const [page, setPage] = useState<number>(1);

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
  console.log('페이지 : ', page);

  if (postListIsLoading) {
    return (
      <customTableStyle2.ManagementContainer>
        Loading...
      </customTableStyle2.ManagementContainer>
    );
  }
  if (postListError) {
    return (
      <customTableStyle2.ManagementContainer>
        Error...
      </customTableStyle2.ManagementContainer>
    );
  }
  return (
    <customTableStyle2.ManagementContainer>
      <CustomTable2
        adminCenterTitleKr={'공지사항'}
        adminCenterTitleEng={'notice'}
        headRows={headRows}
        data={postListDataContent}
        count={postListData.data.totalPages}
        page={page + 1}
        onPageChange={handlePageChange}
      />
    </customTableStyle2.ManagementContainer>
    // <div>테이블 수정중</div>
  );
}

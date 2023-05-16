import { FriendMenu } from '../components/friend_menu';
import { friendsTaskResponse } from '../common/fake_data';
import { User } from '../common/types';
import { useState } from 'react';

const buttonStyle = "bg-base-200 btn btn-outline btn-primary btn-square sm:btn-sm md:btn-md lg:btn-lg no-animation"

export const Friends = () => {
  const [totalDataIndex, setTotalDataIndex] = useState<number>(3);
  const [displayData, setDisplayData] = useState<Array<User>>(friendsTaskResponse.slice(0, totalDataIndex));
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = () => {

    // Base Case of no more display data
    if (displayData.length < 3) {
      return 
    }

    setDisplayData(friendsTaskResponse.slice((totalDataIndex), (totalDataIndex + 3)))
    setCurrentPage(currentPage + 1);
    setTotalDataIndex(totalDataIndex + 3)

  }
  const prevPage = () => {
  
    // Base Case of being on Page 1
    if (currentPage === 1) {
      return
    }

    setDisplayData(friendsTaskResponse.slice((totalDataIndex - 6), (totalDataIndex - 3)))
    setCurrentPage(currentPage - 1);
    setTotalDataIndex(totalDataIndex - 3)
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <div className="flex justify-center bg-primary h-12 mb-4">
        <h1 className='flex justify-center content-center flex-wrap'>Friends</h1>
      </div>
      <div className='mx-4'>
        <FriendMenu content={displayData} />
      </div>
      <div className="btn-group flex mt-auto mb-16">
        <button className={`${buttonStyle}`} onClick={prevPage}>«</button>
        <div className="bg-base-200 grow flex justify-center content-center flex-wrap">{`Page ${currentPage}`}</div>
        <button className={`${buttonStyle}`} onClick={nextPage}>»</button>
      </div>
    </div>
  )
}

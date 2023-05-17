// import { useLoaderData, useParams } from "react-router-dom";
import { Button } from '../components/button/button';
import { currentUserDataResponse } from '../common/fake_data';

type ProfileProps = {

}

// export const loader = async ({ params }) => {
//   // const userData= await getUserData(params.uuid);
//   return { currentUserDataResponse }
// }

export const Profile = () => {
  

  // API Call of friend's data
  // Can grab uuid from useParams, or from loader
  // let { uuid } = useParams();
  // const { currentUserDataResponse } = useLoaderData();
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-4/5 h-3/4 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{currentUserDataResponse.userName.toUpperCase()}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Button color='bg-primary' name='Edit' />
        </div>
      </div>
    </div>
  )
}

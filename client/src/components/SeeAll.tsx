
interface SeeAllProps {
  userId?: string;
}

export const SeeAll = ({ userId } : SeeAllProps) => {
  /* Make so that this component receives optional props of a user id
    if user id is found, href to /profile/:id
    if no user id is found, href to /friends
  */
  
  const href = userId ? `/profile/${userId}` : '/friends';
  
  return (
    <a href={href} className='text-[#e0b0ff] flex items-end'>SEE ALL</a>
  )

}

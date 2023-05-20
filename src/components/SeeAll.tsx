export const SeeAll = () => {
  /* Make so that this component receives optional props of a user id
    if user id is found, href to /profile/:id
    if no user id is found, href to /friends
  */
  return (
    <a href="/friends" className='text-[#e0b0ff] flex items-end'>SEE ALL</a>
  )

}
